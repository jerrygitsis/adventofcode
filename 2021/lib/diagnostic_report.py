
class DiagnosticReport():
    def __init__(self, lines):
        self.lines = lines

    def __get_counts(self, lines = None):
        if not lines:
            lines = self.lines
        counts = []
        for i in range(len(lines[0])):
            count = {0: 0, 1: 0}
            for line in lines:
                count[int(line[i])] += 1
            counts.append(count)
        return counts


    def get_gamma(self):
        val = 0
        for count in self.__get_counts():
            val *= 2
            if count[1] > count [0]:
                val += 1

        return val

    def get_epsilon(self):
        val = 0
        for count in self.__get_counts():
            val *= 2
            if count[1] < count [0]:
                val += 1

        return val

    def get_oxygen_rating(self):
        lines = [line for line in self.lines]
        filter_values = [ '1' if count[1] >= count[0] else '0' for count in self.__get_counts(lines) ]
        i = 0
        while len(lines) > 1 and i < len(self.lines[0]):
            lines = [line for line in lines if line[i] == filter_values[i]]
            filter_values = [ '1' if count[1] >= count[0] else '0' for count in self.__get_counts(lines) ]
            i += 1

        return int(lines[0], 2)

    def get_co2_rating(self):
        lines = [line for line in self.lines]
        filter_values = [ '0' if count[1] >= count[0] else '1' for count in self.__get_counts(lines) ]
        i = 0
        while len(lines) > 1 and i < len(self.lines[0]):
            lines = [line for line in lines if line[i] == filter_values[i]]
            filter_values = [ '0' if count[1] >= count[0] else '1' for count in self.__get_counts(lines) ]
            i += 1

        return int(lines[0], 2)
