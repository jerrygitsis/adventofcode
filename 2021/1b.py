import sys
from lib.util import count_increases
from lib.util import sliding_sum

depths = [int(n) for n in sys.stdin.readlines()]
increases = count_increases(sliding_sum(depths))

sys.stdout.write(str(increases) + '\n')
