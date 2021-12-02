import sys
from lib.sub import AimedSub

sub = AimedSub()
commands = [(line.split(' ')[0], int(line.split(' ')[1])) for line in sys.stdin.readlines()]
for c in commands:
    sub.move(*c)

loc = sub.get_loc()
sys.stdout.write(str(loc[0] * loc[1]) + '\n')
