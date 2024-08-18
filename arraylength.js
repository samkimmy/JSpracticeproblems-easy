function getArrayLength(array) {
    // Check if the input is actually an array
    if (Array.isArray(array)) {
        return array.length;
    } else {
        throw new Error("Input is not an array");
    }
}

// Example usage:
console.log(getArrayLength([1, 2, 3, 4]));  // Outputs: 4
console.log(getArrayLength(['a', 'b', 'c']));  // Outputs: 3
