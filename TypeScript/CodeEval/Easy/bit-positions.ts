import * as fs from 'fs';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach((line) => {
    if (line != "") {
        let sum = 0;
        for(let char of line) {
            sum += parseInt(char);
        }

        console.log(sum);
    }
});