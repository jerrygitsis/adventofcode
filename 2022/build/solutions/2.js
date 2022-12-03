"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSolution = void 0;
const baseScore = {
    'X': 1,
    'Y': 2,
    'Z': 3
};
const winningScore = {
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
};
const shapeForMyResult = {
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
};
const getScore = (line) => {
    const [opponentShape, myShape] = line.split(' ');
    return baseScore[myShape] + winningScore[myShape][opponentShape];
};
const getRealScore = (line) => {
    const [opponentShape, myResult] = line.split(' ');
    const myShape = shapeForMyResult[opponentShape][myResult];
    return baseScore[myShape] + winningScore[myShape][opponentShape];
};
const printSolution = (input) => {
    const totalScore = input.reduce((acc, line) => {
        return acc + getScore(line);
    }, 0);
    const realTotalScore = input.reduce((acc, line) => {
        return acc + getRealScore(line);
    }, 0);
    console.log(totalScore, realTotalScore);
};
exports.printSolution = printSolution;
