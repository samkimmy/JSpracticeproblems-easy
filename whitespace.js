function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}
console.log(removeWhitespace("  Hello,   world!  "));
console.log(removeWhitespace("This remove all the spaces ."));