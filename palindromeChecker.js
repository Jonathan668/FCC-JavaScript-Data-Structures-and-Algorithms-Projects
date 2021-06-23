function palindrome(str) {
  //remove all non-alphanumerical characters and convert to lower case and store in new string variable
  let newStr = str.replaceAll(/[^a-zA-Z\d:]+/g,"").toLowerCase();

  //initialize our truth value to true
  let truthValue = true;
  //iterate through new string variable to check if the first character is equal to the last character of the string, if not, set our turth value to false
  for(let i =0;i<newStr.length;i++){
    if(newStr[i] !== newStr[newStr.length - (i + 1)]){
      truthValue = false;
    }
  }
  return truthValue;
}

console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));