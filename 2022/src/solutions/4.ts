interface Section {
    start: number;
    end: number;
}

const lineToSections = (line: string): Section[] => {
    const sections = line.split(',');
    return sections.map((section) => {
        const [start, end] = section.split('-').map(Number);
        return {
            start,
            end
        }
    })
}

const isFullOverlap = (section1: Section, section2: Section) => {
    return section1.start <= section2.start && section1.end >= section2.end
        || section2.start <= section1.start && section2.end >= section1.end;
}

const isOverlap = (section1: Section, section2: Section) => {
    return section1.start >= section2.start && section1.start <= section2.end
        || section1.end >= section2.start && section1.end <= section2.end
        || section2.start >= section1.start && section2.start <= section1.end
        || section2.end >= section1.start && section2.end <= section1.end
}

export const printSolution = (input: string[]) => {
    const fullOverlaps = input.reduce((acc, line) => {
        const [section1, section2] = lineToSections(line);
        if (isFullOverlap(section1, section2)) {
            return acc + 1;
        }
        return acc;
    }, 0)

    const overlaps = input.reduce((acc, line) => {
        const [section1, section2] = lineToSections(line);
        if (isOverlap(section1, section2)) {
            return acc + 1;
        }
        return acc;
    }, 0)

    console.log(fullOverlaps, overlaps);
};
