class Sieve {
    private values: boolean[] = [];

    constructor(num: number) {
        this.constructSieve(num + 1);
    }

    private constructSieve(num: number) {
        this.values = new Array(num).fill(true);

        this.calculateSieve();
    }

    private calculateSieve() {
        for (let i = 4; i < this.values.length; i += 2) {
            this.values[i] = false;
        }

        for (let i = 3; i < this.values.length; i += 2) {
            for (let j = 2; (j * i) < this.values.length; ++j) {
                this.values[i * j] = false
            }
        }
    }

    isPrime(n: number): boolean {
        if (this.values.length < n + 1) {
            this.constructSieve(n + 1);
        }

        return this.values[n];
    }
}

export class G964 {

    public static step = (g, m, n) => {
        const sieve = new Sieve(n);

        let startVal = m;

        for (let i = m; i <= n; ++i) {
            if (sieve.isPrime(i) && sieve.isPrime(i + g)) {
                return [i, i + g];
            }
        }

        return null;
    }
}