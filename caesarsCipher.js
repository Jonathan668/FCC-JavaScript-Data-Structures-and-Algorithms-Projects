function rot13(str) {
  let nonAlphaNumericRegex = /[A-Z]+/; //regex for characters A-Z
  let numberArr = []; //array to store ascii codes of letters from our string 
  for(let i = 0; i < str.length; i++){ //loop through string and check if its any letter between A-Z using our regex
    if(str[i].match(nonAlphaNumericRegex)){
      numberArr.push(str.charCodeAt(i) + 13);  //convert the letter to ascii code and move it 13 spaces
      if(numberArr[i] > 90){  //since the ascii code for A-Z is from 65-90, we check if the number is greater than 90 (pass the max). 
          numberArr[i] = 64 + (numberArr[i] - 90); //if it is we take the difference between the number and 90 and add it back to 64 (the beginning of the range)
      }
    }
    else{
      numberArr.push(str[i]); // if it doesn't match our regex (i.e. spaces, punctuation), just add it into the array
    }
  }
  for(let i = 0; i < numberArr.length; i++){
    if(typeof numberArr[i] === "number"){ //check to make sure we only account for numbers 
      numberArr[i] = String.fromCharCode(numberArr[i]);  //we convert the numbers back to letters
    } 
  }
  return numberArr.join(""); //join the letters in our array to get our ciphered string
}
  
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));