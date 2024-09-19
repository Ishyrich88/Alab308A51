// primeUtils.js

// Function to check if a number is prime
export function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to find the next prime number after n
export function findNextPrime(n) {
    let nextNumber = n + 1;
    while (true) {
        if (isPrime(nextNumber)) {
            console.log(`The next prime number after ${n} is ${nextNumber}.`);
            break;
        }
        nextNumber++;
    }
}
