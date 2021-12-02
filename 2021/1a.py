import sys
from lib.util import count_increases

depths = [int(n) for n in sys.stdin.readlines()]
increases = count_increases(depths)

sys.stdout.write(str(increases) + '\n')