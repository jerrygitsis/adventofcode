"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./utils/input");
const problem = process.argv[2];
const input = (0, input_1.getInput)(`./inputs/${problem}.txt`);
const solution = require(`./solutions/${problem}`);
solution.printSolution(input);
