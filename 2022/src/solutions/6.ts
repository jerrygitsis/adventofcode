const uniqueList = (list: string[]) => {
    return list.length === list.reduce((set, char) => {
        return set.add(char);
    }, new Set()).size;
};

export const printSolution = (input: string[]) => {
    const start = input[0].split('').reduce<string[] | number>((last4, char, index) => {
        if (typeof last4 === 'number') {
            return last4;
        }
        if (index < 14) {
            last4.push(char);
            return last4;
        }
        if(uniqueList(last4)) {
            return index;
        }
        const last3 = last4.slice(1);
        last3.push(char);
        return last3;
    }, []);

    console.log(start);
};
