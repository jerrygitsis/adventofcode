import { batchElements } from "../utils/array";

interface Rucksack {
    right: Record<string, number>,
    left: Record<string, number>
};

const lineToRucksack = (line: string) => {
    return line.split('').reduce<Rucksack>((acc, item, index) => {
        if (index < line.length / 2) {
            if(!acc.right[item]) {
                return { right: {
                    ...acc.right,
                    [item]: 1 
                }, left: acc.left };
            } else {
                const { [item]: count, ...rest } = acc.right;
                return { right: {
                    ...rest,
                    [item]: count + 1
                }, left: acc.left };
            }
        } else {
            if(!acc.left[item]) {
                return { left: {
                    ...acc.left,
                    [item]: 1 
                }, right: acc.right };
            } else {
                const { [item]: count, ...rest } = acc.left;
                return { left: {
                    ...rest,
                    [item]: count + 1
                }, right: acc.right };
            }
        }
    }, {right: {} as Record<string, number>, left: {} as Record<string, number>})
};

const getIncorrectItem = (rucksack: Rucksack): string => {
    return Object.keys(rucksack.right).find((item) => rucksack.left[item]) || '?';
};

const getBadgeItem = (rucksacks: Rucksack[]): string => {
    return rucksacks.reduce<string[]>((acc, rucksack) => {
        const items = Object.keys({...rucksack.left, ...rucksack.right});
        if (acc.length === 0) {
            return items;
        }

        return acc.filter((item) => items.includes(item));
    }, [])[0];
};

const getItemValue = (item: string): number => {
    const charCode = item.charCodeAt(0);

    if (charCode >= 97) {
        return charCode - 96;
    } else {
        return charCode - 38;
    }
};

export const printSolution = (input: string[]) => {
    const total = input.reduce((acc, line) => {
        return getItemValue(getIncorrectItem(lineToRucksack(line))) + acc;
    }, 0);

    const badgeTotal = batchElements(input.map(lineToRucksack), 3).reduce((acc, group) => {
        return acc + getItemValue(getBadgeItem(group));
    }, 0);

    console.log(total, badgeTotal);
};
