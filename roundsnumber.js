function roundToDecimalPlaces(number, decimalPlaces) {
    if (typeof number !== 'number' || typeof decimalPlaces !== 'number' || decimalPlaces < 0) {
        throw new Error("Invalid input. Ensure that the number and decimalPlaces are non-negative numbers.");
    }
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}


console.log(roundToDecimalPlaces(3.14159, 2));  // Outputs: 3.14
console.log(roundToDecimalPlaces(123.456789, 4));  // Outputs: 123.4568
console.log(roundToDecimalPlaces(1.005, 2));  // Outputs: 1
