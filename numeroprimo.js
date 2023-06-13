function numeroprimo(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const primes = [];
for (let i = 2; i <= 1000; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

console.log("Números primos entre 1 e 1000: " + primes.join(", "));