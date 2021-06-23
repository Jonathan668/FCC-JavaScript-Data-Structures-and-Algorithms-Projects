function telephoneCheck(str) {

//object consiting of the key value pairs of the regexes used to match our valid phone numbers
  let phoneNumberRegexes = {
    1: /^(\d{3})-(\d{3})-(\d{4})$/,
    2: /^\((\d{3})\)(\d{3})-(\d{4})$/,
    3: /^\((\d{3})\)\s(\d{3})-(\d{4})$/,
    4: /^(\d{3})\s(\d{3})\s(\d{4})$/,
    5: /(\d{10})/,
    6: /^1\s(\d{3})\s(\d{3})\s(\d{4})$/,
    7: /^1\((\d{3})\)(\d{3})-(\d{4})$/,
    8: /^1\s\((\d{3})\)\s(\d{3})-(\d{4})$/,
    9: /^1\s(\d{3})-(\d{3})-(\d{4})$/
  };

  let truthValue = false; //initiate truth value to false
  let antiRegex1 = /(^\d{11})/; //regex used to prevent users from inputting phone number of length 11
  let antiRegex2 = /\(\d{10}\)/; //regex used to prevent parentheses at beginning and end of phone number inputs
  
  for(let key in phoneNumberRegexes){ //iterate through each key in our object
    if(str.match(phoneNumberRegexes[key])){   //if our string matches any of the values (regexes), set the truth value to true
      truthValue = true;
    }
    else if(str.match(antiRegex1) || str.match(antiRegex2)){ //if our string matches any of the anti regexes, set our truth value to false
      truthValue = false;
    }
  }
  return truthValue; // return truth value
}

console.log(telephoneCheck("8oo-six427676;laskdjf"));