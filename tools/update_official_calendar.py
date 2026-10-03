#!/usr/bin/env python3
"""Collect the public Liga Portugal calendar; no account, key or dependencies."""
from datetime import datetime, timezone
from pathlib import Path
import json
import re
import urllib.request

SOURCE = 'https://www.ligaportugal.pt/calendars-ics/sl_benfica.ics'
SEASON = '2026-2027'

def parse_calendar(text):
    unfolded = re.sub(r'\r?\n[ \t]', '', text)
    if 'BEGIN:VCALENDAR' not in unfolded or SEASON not in unfolded:
        raise ValueError('Missing calendar or wrong season')
    matches = []
    for block in unfolded.split('BEGIN:VEVENT')[1:]:
        fields = {}
        for line in block.split('END:VEVENT', 1)[0].splitlines():
            if ':' in line:
                key, value = line.split(':', 1)
                fields.setdefault(key.split(';')[0], []).append(value)
        categories = fields.get('CATEGORIES', [])
        if SEASON not in categories or 'Allianz Cup' not in categories:
            continue
        summary = fields.get('SUMMARY', [''])[0]
        if ' - ' not in summary:
            raise ValueError('Malformed match summary')
        home, away = summary.split(' - ', 1)
        if 'SL Benfica' not in [home, away]:
            raise ValueError('Unexpected team')
        raw_date = fields.get('DTSTART', [''])[0]
        kickoff = datetime.strptime(raw_date, '%Y%m%dT%H%M%SZ').replace(tzinfo=timezone.utc)
        if not datetime(2026,7,1,tzinfo=timezone.utc) <= kickoff < datetime(2027,7,1,tzinfo=timezone.utc):
            raise ValueError('Date outside configured season')
        url = fields.get('URL', [''])[0]
        match_url = re.fullmatch(r'https://www\.ligaportugal\.pt/match/20262027/allianzcup/(\d+)/(\d+)', url)
        if not match_url:
            raise ValueError('Unexpected official match URL')
        stage = {'1':'Quartos de final', '2':'Meias-finais', '3':'Final'}.get(match_url[1], 'Taça da Liga')
        matches.append({'id':'liga-portugal-' + '/'.join(match_url.groups()),
            'competition':'taca-liga', 'round':stage, 'date':kickoff.date().isoformat(),
            'kickoffUtc':kickoff.isoformat().replace('+00:00','Z') if kickoff.time().isoformat() != '00:00:00' else None,
            'time':None, 'home':home, 'away':away, 'venue':fields.get('LOCATION', [None])[0],
            'status':'NS', 'source':'Liga Portugal', 'sourceUrl':url, 'sourceOnline':True})
    if not matches:
        raise ValueError('No valid cup fixtures; preserve previous snapshot')
    return matches

def main():
    request = urllib.request.Request(SOURCE, headers={'User-Agent':'BenficaMatchCenter/1.0 public-calendar-reader'})
    with urllib.request.urlopen(request, timeout=30) as response:
        games = parse_calendar(response.read().decode('utf-8-sig'))
    destination = Path(__file__).resolve().parents[1] / 'data/official-calendar.json'
    snapshot = {'season':SEASON, 'fetchedAt':datetime.now(timezone.utc).isoformat(),
        'sourceUrl':SOURCE, 'matches':games}
    temporary = destination.with_suffix('.tmp')
    destination.parent.mkdir(parents=True, exist_ok=True)
    temporary.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    temporary.replace(destination)
    print(f'Official calendar: {len(games)} cup fixture(s) saved')

if __name__ == '__main__':
    main()
