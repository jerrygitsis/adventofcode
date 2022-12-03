export const batchElements = <T>(array: Array<T>, batchSize: number): Array<Array<T>> => {
    return array.reduce<Array<Array<T>>>((acc, element) => {
        if(acc.length === 0 || acc[acc.length - 1].length >= batchSize) {
            return [...acc, [element]]
        } else {
            acc[acc.length - 1].push(element);
            return acc;
        }
    }, []);
}