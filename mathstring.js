function mathString(expression) {
    return Function('"use strict"; return (' + expression + ')')();
}
console.log(mathString("23+4"));        // Output: 27
console.log(mathString("45-15"));       // Output: 30
console.log(mathString("13+2-5*2"));    // Output: 5
console.log(mathString("49/7*2-3"));    // Output: 11
