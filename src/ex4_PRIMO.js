let number = 13,
    isPrime;

for (let i = number; i >= 2; i--) {
    isPrime = calculatePrime(i);
}

function calculatePrime(num) {
    if (number % num !== 0){
        return true;
    }
}

if (isPrime){
    console.log("The number is Prime.");
} else {
    console.log("The number is not Prime.");
}