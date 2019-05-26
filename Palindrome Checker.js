function palindrome (input) {
  input = input.toLowerCase().replace(/[\W_]/g, "");
  
  let x = 0;
  let y = input.length - 1;
  
  for (let i = 0; i < input.length; i++) {
    if (input[x] !== input[y]) {
      return false
    }
    x++;
    y--;
  }
  return true;
}

// test here
console.log(palindrome("racecar"));