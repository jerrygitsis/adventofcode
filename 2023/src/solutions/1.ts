const DIGITS = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]
const WORD_DIGITS = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
]

const WORD_DIGITS_TO_NUMBER: Record<string, string> = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
}
const isDigit = (char: string) => {
    return DIGITS.includes(char);
};

const getFirstDigit = (line: string): string => {
    if(line.length === 0) {
        return '0';
    }
    if (isDigit(line[0])) {
        return line[0];
    }

    const wordDigitMatch = WORD_DIGITS.find((wordDigit) => line.startsWith(wordDigit));
    if (wordDigitMatch) {
        return WORD_DIGITS_TO_NUMBER[wordDigitMatch];
    }
    return getFirstDigit(line.substring(1));
}

const getLastDigit = (line: string): string => {
    if(line.length === 0) {
        return '0';
    }
    if (isDigit(line[line.length - 1])) {
        return line[line.length - 1];
    }

    const wordDigitMatch = WORD_DIGITS.find((wordDigit) => line.endsWith(wordDigit));
    if (wordDigitMatch) {
        return WORD_DIGITS_TO_NUMBER[wordDigitMatch];
    }
    return getLastDigit(line.substring(0, line.length - 1));
}

const getCalibrationValue = (line: string) => {
    return getFirstDigit(line) + getLastDigit(line);
}

export const printSolution = (input: string[]) => {
    const sumOfCalibrationValues = input.reduce<number>((acc, line) => {
        return acc + Number(getCalibrationValue(line));
    }, 0);

    console.log(sumOfCalibrationValues);
};
