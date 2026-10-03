#!/usr/bin/env python3
"""Read the official public Benfica calendar, without keys or dependencies."""
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
import json
import urllib.request

SOURCE = 'https://www.slbenfica.pt/pt-pt/futebol/calendario'
ENDPOINT = 'https://www.slbenfica.pt/api/sitecore/Calendar/CalendarEvents'
SEASON = '2026-2027'
FILTERS = {'Menu':'next','Modality':'{ECCFEB41-A0FD-4830-A3BB-7E57A0A15D00}',
    'IsMaleTeam':True,'Rank':'16094ecf-9e78-4e3e-bcdf-28e4f765de9f',
    'Tournaments':['sr:tournament:853','sr:tournament:679','sr:tournament:238','sr:tournament:327'],
    'Seasons':['2026/27'],'PageNumber':0}
VOID = {'img','input','br','hr','meta','link','source','area','embed','wbr'}

class CalendarParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.cards=[]
        self.stack=[]
        self.card=None

    def handle_starttag(self, tag, attrs):
        a=dict(attrs); classes=set(a.get('class','').split())
        if self.card is None:
            if 'calendar-item' not in classes: return
            self.card={'id':a.get('matchid',''),'channels':[]}
            self.stack=[]
        if tag == 'img' and any('calendar-live-channels' in c for _,c in self.stack):
            label=a.get('alt','').strip()
            if label: self.card['channels'].append(label)
        if tag not in VOID: self.stack.append((tag,classes))

    def handle_data(self, data):
        if self.card is None: return
        for key in ['titleForCalendar','startDateForCalendar','calendar-competition']:
            if any(key in c for _,c in self.stack):
                self.card[key]=self.card.get(key,'')+data

    def handle_endtag(self, tag):
        if self.card is None: return
        for i in range(len(self.stack)-1,-1,-1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break
        if not self.stack:
            self.cards.append(self.card)
            self.card=None

def parse_calendar(text):
    parser=CalendarParser(); parser.feed(text)
    games=[]
    for card in parser.cards:
        title=card.get('titleForCalendar','').strip()
        competition=card.get('calendar-competition','').strip()
        if '26/27' not in competition or ' vs ' not in title: continue
        home,away=title.split(' vs ',1)
        if 'SL Benfica' not in [home,away]: continue
        try:
            date=datetime.strptime(card.get('startDateForCalendar','').strip(),'%m/%d/%Y %I:%M:%S %p')
        except ValueError: continue
        if not datetime(2026,7,1) <= date < datetime(2027,7,1): continue
        channels=list(dict.fromkeys(card['channels']))
        if any(len(c)>50 or not c.isprintable() for c in channels): continue
        games.append({'id':card['id'],'date':date.date().isoformat(),'home':home,'away':away,
            'channels':['SPORT TV' if c == 'SPORTTV' else c for c in channels],
            'source':'SL Benfica','sourceUrl':SOURCE})
    if not games: raise ValueError('No valid official fixtures; preserve previous snapshot')
    if len({g['id'] for g in games}) != len(games): raise ValueError('Duplicate official fixtures')
    return games

def main():
    request=urllib.request.Request(ENDPOINT,data=json.dumps({'filters':FILTERS}).encode(),
        headers={'Content-Type':'application/json','Referer':SOURCE,
            'User-Agent':'BenficaMatchCenter/1.0 public-calendar-reader'})
    with urllib.request.urlopen(request,timeout=40) as response:
        games=parse_calendar(response.read().decode('utf-8'))
    destination=Path(__file__).resolve().parents[1]/'data/official-tv.json'
    snapshot={'season':SEASON,'fetchedAt':datetime.now(timezone.utc).isoformat(),
        'sourceUrl':SOURCE,'matches':games}
    destination.parent.mkdir(parents=True,exist_ok=True)
    temp=destination.with_suffix('.tmp')
    temp.write_text(json.dumps(snapshot,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    temp.replace(destination)
    print(f'Benfica: {len(games)} official TV records saved')

if __name__ == '__main__': main()
