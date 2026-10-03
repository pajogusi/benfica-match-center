import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('calendar_collector', Path(__file__).resolve().parents[1] / 'tools/update_official_calendar.py')
collector = importlib.util.module_from_spec(spec)
spec.loader.exec_module(collector)

SAMPLE = '''BEGIN:VCALENDAR
X-WR-CALNAME:2026-2027
BEGIN:VEVENT
CATEGORIES:2026-2027
CATEGORIES:Allianz Cup
SUMMARY:SL Benfica - Gil Vicente FC
DTSTART:20261029T204500Z
URL:https://www.ligaportugal.pt/match/20262027/allianzcup/
 1/3
END:VEVENT
END:VCALENDAR'''

class CalendarTests(unittest.TestCase):
    def test_unfolded_official_cup_fixture(self):
        matches = collector.parse_calendar(SAMPLE)
        self.assertEqual(matches[0]['kickoffUtc'], '2026-10-29T20:45:00Z')
        self.assertEqual(matches[0]['round'], 'Quartos de final')
        self.assertEqual(matches[0]['status'], 'NS')

    def test_wrong_season_empty_and_external_url_preserve_previous_data(self):
        for bad in ['', SAMPLE.replace('2026-2027', '2025-2026'), SAMPLE.replace('www.ligaportugal.pt', 'example.com')]:
            with self.assertRaises(ValueError):
                collector.parse_calendar(bad)

    def test_midnight_is_not_a_confirmed_kickoff(self):
        match = collector.parse_calendar(SAMPLE.replace('T204500Z', 'T000000Z'))[0]
        self.assertIsNone(match['kickoffUtc'])
