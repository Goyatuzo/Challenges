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
export class PairSocks {
    private unmatchedSocks: { [color: number]: boolean };
    private matched: number;

    constructor() {
        this.unmatchedSocks = {};
        this.matched = 0;
    }

    get unmatchedCount(): number {
        return Object.keys(this.unmatchedSocks).length;
    }

    get matchedCount(): number {
        return this.matched;
    }

    addSock(sockColor: number) {
        if (sockColor in this.unmatchedSocks) {
            delete this.unmatchedSocks[sockColor];
            this.matched++;

            return;
        }

        this.unmatchedSocks[sockColor] = true;
    }

    isUnmatched(sockNumber: number): boolean {
        return sockNumber in this.unmatchedSocks;
    }
}

export default function getMatchedSockCount(c: Array<number>): number {
    let socks = new PairSocks();

    c.forEach(sockNumber => {
        socks.addSock(sockNumber);
    });

    return socks.matchedCount;
}

function main() {
    var n = parseInt(readLine());
    var cString = readLine();
    if (cString) {
        var cArray = cString.split(' ');
        var c = cArray.map(Number);
        console.log(getMatchedSockCount(c));
    }

}
