
def count_increases(ls):
    count = 0
    for i in range(len(ls)):
        if i < len(ls) - 1 and ls[i] < ls[i + 1]:
            count += 1

    return count