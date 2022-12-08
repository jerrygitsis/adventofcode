"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSolution = void 0;
const resultsToDirectoryContents = (results) => {
    return results.map((res) => {
        const [a, b] = res.split(' ');
        if (a === 'dir') {
            return b;
        }
        else {
            return {
                name: b,
                size: Number(a)
            };
        }
    });
};
const directorySize = (dir, directoryMap) => {
    return directoryMap[dir].reduce((acc, entry) => {
        if (typeof entry === 'string') {
            return acc + directorySize(dir + '/' + entry, directoryMap);
        }
        else {
            return acc + entry.size;
        }
    }, 0);
};
const printSolution = (input) => {
    const instructions = input.reduce((acc, line) => {
        if (line[0] === '$') {
            acc.push({
                command: line.slice(2),
                results: []
            });
            return acc;
        }
        acc[acc.length - 1].results.push(line);
        return acc;
    }, []);
    const directoryMap = {};
    const dirStack = [];
    instructions.forEach((instruction) => {
        const { command, results } = instruction;
        if (command === 'cd ..') {
            dirStack.pop();
        }
        else if (command === 'ls') {
            const path = dirStack.join('/');
            directoryMap[path] = resultsToDirectoryContents(results);
        }
        else {
            const [_, dir] = command.split(' ');
            dirStack.push(dir);
        }
    });
    const sum = Object.keys(directoryMap).reduce((acc, dir) => {
        const dirSize = directorySize(dir, directoryMap);
        if (dirSize <= 100000) {
            return dirSize + acc;
        }
        return acc;
    }, 0);
    const totalUsedSpace = directorySize('/', directoryMap);
    const spaceNeedtoBeFreed = totalUsedSpace - 40000000;
    const size = Object.keys(directoryMap).map((dir) => {
        return directorySize(dir, directoryMap);
    }).sort((a, b) => a - b);
    console.log(size.find((size) => size >= spaceNeedtoBeFreed));
};
exports.printSolution = printSolution;
