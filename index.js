// Define a helper function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage of the helper function
let minNumber = 1;
let maxNumber = 100;
let randomNumber = generateRandomNumber(minNumber, maxNumber);
console.log("Random number between", minNumber, "and", maxNumber, "is:", randomNumber);
