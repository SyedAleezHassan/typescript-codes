function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

// Example usage
const numberToCheck = 17; // Change this number to check if it's prime
console.log(`${numberToCheck} is prime? ${isPrime(numberToCheck)}`);
