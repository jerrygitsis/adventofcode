import sys
from lib.diagnostic_report import DiagnosticReport

rep = DiagnosticReport([line.strip() for line in sys.stdin.readlines()])
power_consumption = rep.get_epsilon() * rep.get_gamma()

sys.stdout.write(str(power_consumption) + '\n')

