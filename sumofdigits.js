function sumOfDigits(number) {
    // Validate the input
    if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
        throw new Error("Input must be a positive integer.");
    }

    // Convert the number to a string to iterate over each digit
    const numberStr = number.toString();
    let sum = 0;

    // Iterate over each character in the string
    for (let i = 0; i < numberStr.length; i++) {
        // Convert character back to number and add to sum
        sum += parseInt(numberStr[i], 10);
    }

    return sum;
}

console.log(sumOfDigits(123));  // Outputs: 6 (1 + 2 + 3)
console.log(sumOfDigits(456));  // Outputs: 15 (4 + 5 + 6)
console.log(sumOfDigits(987));  // Outputs: 24 (9 + 8 + 7)
