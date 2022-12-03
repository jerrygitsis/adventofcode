const baseScore: Record<string, number> = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

const winningScore: Record<string, Record<string, number>> = {
    'X': {
        'A': 3,
        'B': 0,
        'C': 6,
    },
    'Y': {
        'A': 6,
        'B': 3,
        'C': 0,
    },
    'Z': {
        'A': 0,
        'B': 6,
        'C': 3
    }
}

const shapeForMyResult: Record<string, Record<string, string>> = {
    'A': {
        'X': 'Z',
        'Y': 'X',
        'Z': 'Y',
    },
    'B': {
        'X': 'X',
        'Y': 'Y',
        'Z': 'Z',
    },
    'C': {
        'X': 'Y',
        'Y': 'Z',
        'Z': 'X',
    }
}

const getScore = (line: string): number => {
    const [opponentShape, myShape] = line.split(' ');
    return baseScore[myShape] + winningScore[myShape][opponentShape];
}

const getRealScore = (line: string): number => {
    const [opponentShape, myResult] = line.split(' ');
    const myShape = shapeForMyResult[opponentShape][myResult];
    return baseScore[myShape] + winningScore[myShape][opponentShape];
}

export const printSolution = (input: string[]) => {
    const totalScore = input.reduce<number>((acc, line) => {
        return acc + getScore(line);
    }, 0)

    const realTotalScore = input.reduce<number>((acc, line) => {
        return acc + getRealScore(line);
    }, 0) 

    console.log(totalScore, realTotalScore);
};
