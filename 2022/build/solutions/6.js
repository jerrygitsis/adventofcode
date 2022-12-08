"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSolution = void 0;
const uniqueList = (list) => {
    return list.length === list.reduce((set, char) => {
        return set.add(char);
    }, new Set()).size;
};
const printSolution = (input) => {
    const start = input[0].split('').reduce((last4, char, index) => {
        if (typeof last4 === 'number') {
            return last4;
        }
        if (index < 14) {
            last4.push(char);
            return last4;
        }
        if (uniqueList(last4)) {
            return index;
        }
        const last3 = last4.slice(1);
        last3.push(char);
        return last3;
    }, []);
    console.log(start);
};
exports.printSolution = printSolution;
