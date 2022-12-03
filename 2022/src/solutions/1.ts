interface CalorieAcc {
    localSum: number;
    allSums: number[];
}

export const printSolution = (input: string[]) => {
    const summedSortedCals = input.reduce<CalorieAcc>((acc, line) => {
        if (line.length === 0) {
            return {
                localSum: 0,
                allSums: [...acc.allSums, acc.localSum]
            }
        } else {
            return {
                localSum: acc.localSum + Number(line),
                allSums: acc.allSums
            }           
        }
    }, { localSum: 0, allSums: [] }).allSums.sort((a,b) => b - a);
    console.log(summedSortedCals[0]);
    console.log(summedSortedCals.slice(0, 3).reduce((acc, cals) => acc + cals, 0));
};
