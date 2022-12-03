import fs from 'fs';

export const getInput = (fileName: string): Array<string> => {
    try {
      const data = fs.readFileSync(fileName);
      return data.toString().split(/\r?\n/);
    } catch (err) {
        console.log('Error reading input', err);
      return [];
    }
}