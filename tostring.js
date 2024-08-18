function arrayToString(arr) {
    return arr.join('');
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const mix= [1, 2, 3, "a", "s", "dAAAA"];
  
  const numbersAsString = arrayToString(numbers);
  const lettersAsString = arrayToString(letters);
  const letersandnumbersAsString = arrayToString(mix)
  
  console.log(numbersAsString); // Output: "123456"
  console.log(lettersAsString); // Output: "abcdef"
  console.log(letersandnumbersAsString); //Output: '123asdAAAA'


  