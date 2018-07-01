import * as fs from 'fs';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: any = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the reverseArray function below.
export function arraysDs(a: number[]): number[] {
    for (let i = 0, j = a.length - 1; i < j; ++i, --j) {
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = arraysDs(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
