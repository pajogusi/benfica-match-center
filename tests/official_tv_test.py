import importlib.util
from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('official_tv',ROOT/'tools/update_benfica_tv.py')
module=importlib.util.module_from_spec(spec); spec.loader.exec_module(module)

class OfficialTvTests(unittest.TestCase):
    def test_real_calendar_records_include_channels_and_no_inferred_channel(self):
        games=module.parse_calendar((ROOT/'tests/fixtures/benfica-tv.html').read_text())
        self.assertEqual(len(games),10)
        self.assertEqual(games[0]['channels'],['BTV'])
        self.assertEqual(games[1]['channels'],['SPORT TV'])
        self.assertEqual(games[4]['channels'],[])
        self.assertEqual(games[0]['date'],'2026-10-11')

    def test_old_season_and_wrong_team_are_rejected(self):
        html=(ROOT/'tests/fixtures/benfica-tv.html').read_text()
        for invalid in [html.replace('26/27','25/26'),html.replace('SL Benfica','Outra equipa')]:
            with self.assertRaises(ValueError): module.parse_calendar(invalid)

    def test_duplicate_records_are_rejected(self):
        html=(ROOT/'tests/fixtures/benfica-tv.html').read_text()
        with self.assertRaises(ValueError): module.parse_calendar(html+html)
