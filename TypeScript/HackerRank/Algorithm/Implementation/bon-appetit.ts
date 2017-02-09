process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array: Array<string> = [];
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
export default function bonAppetit(k: number, b: number, c: Array<number>): string {
    let paidSum = c.reduce((sum, curr, idx) => {
        if (idx === k) {
            return sum;
        }

        return sum + curr;
    });

    let expected = paidSum / 2;

    if (b === expected) {
        return "Bon Appetit";
    }

    return (b - expected).toString();
}


function main() {
    let one = readLine();
    let two = readLine();
    let three = readLine();

    if (one && two && three) {
        let oneNums = one.split(' ').map(Number);
        let c = two.split(' ').map(Number);

        let k = oneNums[1];
        let b = parseInt(three);

        console.log(bonAppetit(k, b, c));
    }
}
