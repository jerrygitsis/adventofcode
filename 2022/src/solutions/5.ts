type Stacks = string[][]

interface Instruction {
    count: number
    start: number
    end: number
}

// starting stacks
//             [G] [W]         [Q]    
// [Z]         [Q] [M]     [J] [F]    
// [V]         [V] [S] [F] [N] [R]    
// [T]         [F] [C] [H] [F] [W] [P]
// [B] [L]     [L] [J] [C] [V] [D] [V]
// [J] [V] [F] [N] [T] [T] [C] [Z] [W]
// [G] [R] [Q] [H] [Q] [W] [Z] [G] [B]
// [R] [J] [S] [Z] [R] [S] [D] [L] [J]
//  1   2   3   4   5   6   7   8   9 

const INITIAL_STACKS: Stacks = [
    ['R', 'G', 'J', 'B', 'T', 'V', 'Z'],
    ['J', 'R', 'V', 'L'],
    ['S', 'Q', 'F'],
    ['Z', 'H', 'N', 'L', 'F', 'V', 'Q', 'G'],
    ['R', 'Q', 'T', 'J', 'C', 'S', 'M', 'W'],
    ['S', 'W', 'T', 'C', 'H', 'F'],
    ['D', 'Z', 'C', 'V', 'F', 'N', 'J'],
    ['L', 'G', 'Z', 'D', 'W', 'R', 'F', 'Q'],
    ['J', 'B', 'W', 'V', 'P'],
]

const lineToIntruction = (line: string): Instruction => {
    const words = line.split(' ');
    return {
        count: Number(words[1]),
        start: Number(words[3]),
        end: Number(words[5]),
    }
}

const performInstruction = (instruction: Instruction, stacks: Stacks) => {
    [...Array(instruction.count)].map((_) => {
        const block = stacks[instruction.start - 1].pop();
        if(!block) {
            return;
        }
        stacks[instruction.end - 1].push(block);
    });
    return stacks;
}

const perform9001Instruction = (instruction: Instruction, stacks: Stacks) => {
    const blockHolder: string[] = [];
    [...Array(instruction.count)].map((_) => {
        const block = stacks[instruction.start - 1].pop();
        if(!block) {
            return;
        }
        blockHolder.push(block);
    });
    [...Array(instruction.count)].map((_) => {
        const block = blockHolder.pop();
        if(!block) {
            return;
        }
        stacks[instruction.end - 1].push(block);
    });

    return stacks;
}

export const printSolution = (input: string[]) => {
    const topBlocks = input.reduce((acc, line) => {
        return perform9001Instruction(lineToIntruction(line), acc);
    }, INITIAL_STACKS).map((stack) => {
        return stack[stack.length - 1];
    }).reduce((acc, block) => {
        return acc + block;
    }, '');

    console.log(topBlocks);
};
