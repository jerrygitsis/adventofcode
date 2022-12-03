"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInput = void 0;
const fs_1 = __importDefault(require("fs"));
const getInput = (fileName) => {
    try {
        const data = fs_1.default.readFileSync(fileName);
        return data.toString().split(/\r?\n/);
    }
    catch (err) {
        console.log('Error reading input', err);
        return [];
    }
};
exports.getInput = getInput;
