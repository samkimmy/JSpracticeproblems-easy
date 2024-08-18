function getStringLength(str) {
    // Check if the input is a string
    if (typeof str !== 'string') {
        throw new Error("Input must be a string.");
    }

    // Return the length of the string
    return str.length;
}

// Example usage:
console.log(getStringLength("Hello, World!"));  // Outputs: 13
console.log(getStringLength("JavaScript"));     // Outputs: 10
console.log(getStringLength(""));               // Outputs: 0
