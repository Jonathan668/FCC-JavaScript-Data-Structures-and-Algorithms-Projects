function convertToRoman(num) {
  //return variable that stores our roman numeral number
  let romanNumeral = "";

  //object consiting of the key value pairs of the primary intervals of roman numerals
  let romanConversions = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1 
  };

  //iterate through each key-value pair
  for(let key in romanConversions){
  //goes through the key value pairs until we reach a number where our num is greater than or equal to 
      while(num >= romanConversions[key]){
        romanNumeral+= key;  //add that number's roman numeral representation into our return variable
        num-= romanConversions[key]; //subtract the number from num and repeat steps with our new num 
      }
    }
    return romanNumeral;
}

console.log(convertToRoman(36));
console.log(convertToRoman(45));