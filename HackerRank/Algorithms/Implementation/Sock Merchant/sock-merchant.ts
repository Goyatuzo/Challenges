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
