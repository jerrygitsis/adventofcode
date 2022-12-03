"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchElements = void 0;
const batchElements = (array, batchSize) => {
    return array.reduce((acc, element) => {
        if (acc.length === 0 || acc[acc.length - 1].length >= batchSize) {
            return [...acc, [element]];
        }
        else {
            acc[acc.length - 1].push(element);
            return acc;
        }
    }, []);
};
exports.batchElements = batchElements;
