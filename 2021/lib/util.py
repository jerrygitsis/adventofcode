
def count_increases(ls):
    count = 0
    for i in range(len(ls)):
        if i < len(ls) - 1 and ls[i] < ls[i + 1]:
            count += 1

    return count

def sliding_sum(ls):
    sum_ls = []
    for i in range(len(ls)):
        if i > 0 and i < len(ls) - 1:
            sum_ls.append(ls[i - 1] + ls[i] + ls[i + 1])

    return sum_ls 
