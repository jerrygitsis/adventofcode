"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSolution = void 0;
const array_1 = require("../utils/array");
;
const lineToRucksack = (line) => {
    return line.split('').reduce((acc, item, index) => {
        if (index < line.length / 2) {
            if (!acc.right[item]) {
                return { right: Object.assign(Object.assign({}, acc.right), { [item]: 1 }), left: acc.left };
            }
            else {
                const _a = acc.right, _b = item, count = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return { right: Object.assign(Object.assign({}, rest), { [item]: count + 1 }), left: acc.left };
            }
        }
        else {
            if (!acc.left[item]) {
                return { left: Object.assign(Object.assign({}, acc.left), { [item]: 1 }), right: acc.right };
            }
            else {
                const _c = acc.left, _d = item, count = _c[_d], rest = __rest(_c, [typeof _d === "symbol" ? _d : _d + ""]);
                return { left: Object.assign(Object.assign({}, rest), { [item]: count + 1 }), right: acc.right };
            }
        }
    }, { right: {}, left: {} });
};
const getIncorrectItem = (rucksack) => {
    return Object.keys(rucksack.right).find((item) => rucksack.left[item]) || '?';
};
const getBadgeItem = (rucksacks) => {
    return rucksacks.reduce((acc, rucksack) => {
        const items = Object.keys(Object.assign(Object.assign({}, rucksack.left), rucksack.right));
        if (acc.length === 0) {
            return items;
        }
        return acc.filter((item) => items.includes(item));
    }, [])[0];
};
const getItemValue = (item) => {
    const charCode = item.charCodeAt(0);
    if (charCode >= 97) {
        return charCode - 96;
    }
    else {
        return charCode - 38;
    }
};
const printSolution = (input) => {
    const total = input.reduce((acc, line) => {
        return getItemValue(getIncorrectItem(lineToRucksack(line))) + acc;
    }, 0);
    const badgeTotal = (0, array_1.batchElements)(input.map(lineToRucksack), 3).reduce((acc, group) => {
        return acc + getItemValue(getBadgeItem(group));
    }, 0);
    console.log(total, badgeTotal);
};
exports.printSolution = printSolution;
