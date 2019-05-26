function rot13 (str) {
  str = str.split("");
  let newStr = []
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) <= 63) {
      newStr.push(str[i]);
    }
    else if (str[i].charCodeAt(0) <= 77) {
      newStr.push(String.fromCharCode(str[i].charCodeAt(0) + 13));
    }
    else {
      newStr.push(String.fromCharCode(str[i].charCodeAt(0) - 13));
    }
  }
  return newStr.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));