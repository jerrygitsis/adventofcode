type DirectoryContents = string | File;

type DirectoryMap = Record<string, DirectoryContents[]>

interface File {
    name: string,
    size: number
}

interface Instuction {
    command: string,
    results: string[]
}

const resultsToDirectoryContents = (
    results: string[]
): DirectoryContents[] => {
    return results.map((res) => {
        const [a, b] = res.split(' ');
        if (a === 'dir') {
            return b;
        } else {
            return {
                name: b,
                size: Number(a)
            }
        }
    })
}

const directorySize = (dir: string, directoryMap: DirectoryMap): number => {
    return directoryMap[dir].reduce((acc, entry) => {
        if (typeof entry === 'string') {
            return acc + directorySize(dir + '/' + entry, directoryMap);
        } else {
            return acc + entry.size;
        }
    }, 0);
}



export const printSolution = (input: string[]) => {
    const instructions = input.reduce<Instuction[]>((acc, line) => {
        if (line[0] === '$') {
            acc.push({
                command: line.slice(2),
                results: []
            });
            return acc;
        }

        acc[acc.length - 1].results.push(line)
        return acc;
    }, [])

    const directoryMap: DirectoryMap = {};
    const dirStack: string[] = [];
    instructions.forEach((instruction) => {
        const { command, results } = instruction;
        if (command === 'cd ..') {
            dirStack.pop();
        } else if (command === 'ls') {
            const path = dirStack.join('/');
            directoryMap[path] = resultsToDirectoryContents(results);
        } else {
            const [_, dir] =command.split(' ');
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
    console.log(size.find((size) => size >= spaceNeedtoBeFreed))
};
