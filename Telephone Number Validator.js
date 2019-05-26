function telephoneCheck (str) {
   var reg = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-,._"']?[0-9]{3}[\s\-,._"']?[0-9]{4}$/;
   return reg.test(str);
}

// test here
telephoneCheck("555-555-5555");