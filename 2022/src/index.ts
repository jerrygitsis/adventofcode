import { getInput } from "./utils/input";

const problem = process.argv[2];
const input = getInput(`./inputs/${problem}.txt`)
const solution = require(`./solutions/${problem}`)

solution.printSolution(input);

