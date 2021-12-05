import sys
from lib.diagnostic_report import DiagnosticReport

rep = DiagnosticReport([line.strip() for line in sys.stdin.readlines()])
life_support_rating = rep.get_co2_rating() * rep.get_oxygen_rating()

sys.stdout.write(str(life_support_rating) + '\n')

