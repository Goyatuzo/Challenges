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

function readLine(): string {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
export default function findNonSosCharacterCount(str: string): number {
    let count = 0;

    for (let i = 0; i < str.length; i += 3) {
        if (str[i] !== "S") {
            count++;
        }

        if (str[i + 1] !== "O") {
            count++;
        }

        if (str[i + 2] !== "S") {
            count++;
        }
    }
    
    return count;
}

function main() {
    var S = readLine();
    console.log(findNonSosCharacterCount(S));
}
