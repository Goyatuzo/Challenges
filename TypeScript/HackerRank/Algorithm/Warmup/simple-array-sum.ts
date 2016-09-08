process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array: Array<string>;
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

/**
 * Sum the elements of the array.
 * @param array
 */
export default function sumArray(array: Array<number>) {
    return array.reduce((prev: number, next: number) => prev + next);
}

function main() {
    let n = parseInt(readLine());
    let arr = readLine().split(' ');

    let intArray = arr.map((element: string) => parseInt(element));

    console.log(sumArray(intArray));
}
