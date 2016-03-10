def get_primes(n):
    sieve = {}
    primes = []

    for i in xrange(2, n + 1):
        if i not in sieve:
            sieve[i] = True
            primes.append(i)

        j = 2
        # All subsequent multiples of i are not prime.
        while i * j < n:
            sieve[i * j] = False
            j += 1

    return primes

def get_nth_primes(n):
    primes = get_primes(max(n) * 100)

    return [primes[i - 1] for i in n]