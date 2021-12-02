
class SimpleSub:
    def __init__(self, x = 0, y = 0):
        self.x = x
        self.y = y

    def move(self, direction, count):
        if direction == 'up':
            self.y -= count
        elif direction == 'down':
            self.y += count
        elif direction == 'forward':
            self.x += count

    def get_loc(self):
        return (self.x, self.y)

class AimedSub:
    def __init__(self, x = 0, y = 0, aim = 0):
        self.x = x
        self.y = y
        self.aim = aim

    def move(self, direction, count):
        if direction == 'up':
            self.aim -= count
        elif direction == 'down':
            self.aim += count
        elif direction == 'forward':
            self.x += count
            self.y += count * self.aim 

    def get_loc(self):
        return (self.x, self.y)