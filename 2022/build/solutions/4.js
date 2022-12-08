"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSolution = void 0;
const lineToSections = (line) => {
    const sections = line.split(',');
    return sections.map((section) => {
        const [start, end] = section.split('-').map(Number);
        return {
            start,
            end
        };
    });
};
const isFullOverlap = (section1, section2) => {
    return section1.start <= section2.start && section1.end >= section2.end
        || section2.start <= section1.start && section2.end >= section1.end;
};
const isOverlap = (section1, section2) => {
    return section1.start >= section2.start && section1.start <= section2.end
        || section1.end >= section2.start && section1.end <= section2.end
        || section2.start >= section1.start && section2.start <= section1.end
        || section2.end >= section1.start && section2.end <= section1.end;
};
const printSolution = (input) => {
    const fullOverlaps = input.reduce((acc, line) => {
        const [section1, section2] = lineToSections(line);
        if (isFullOverlap(section1, section2)) {
            return acc + 1;
        }
        return acc;
    }, 0);
    const overlaps = input.reduce((acc, line) => {
        const [section1, section2] = lineToSections(line);
        if (isOverlap(section1, section2)) {
            return acc + 1;
        }
        return acc;
    }, 0);
    console.log(fullOverlaps, overlaps);
};
exports.printSolution = printSolution;
