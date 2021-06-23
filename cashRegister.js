let moneyValues = [
    {name: "ONE HUNDRED", value: 100.00},
    {name: "TWENTY", value: 20.00},
    {name: "TEN", value: 10.00},
    {name: "FIVE", value: 5.00},
    {name: "ONE", value: 1.00},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.10},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01}
  ];  //object to hold the value of each bill/coin
  
function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;  //change 
  let changeArr = [];  //holds the change represented in 2D array form
  let totalCID = 0; //the total amount of cash that's in the drawer
  
  for(let i = 0; i<cid.length;i++){  //iterate through cid array to get the number. Number gets added it to our totalCID
    totalCID += cid[i][1];
  }
  
  if(changeDue > totalCID){  
    return { status: "INSUFFICIENT_FUNDS", change: changeArr };  //we return status of insufficient funds if the change amount is more than the amount of cash we have in drawer
  }
  else if(changeDue === totalCID){
    return { status: "CLOSED", change: cid };  //we return status of closed if the change amount is equal to the amount of cash we have in drawer
  }
  else{
    cid = cid.reverse();  //reverse the cid array so its in descending order so it matches our object moneyValues
    changeArr = moneyValues.reduce(function(acc, next, index){  //perform the necessary calculations using reduce method where the change values are accumulated into our changeArr
        if(changeDue >= next.value){  //go through moneyValues until we find a value that is less than or equal to our chage amount.
          let currVal = 0.0; //value for the amount of "duplicates" of bill/coin that is needed from each bill/coin "slot" 
          while(changeDue >= next.value && cid[index][1] >= next.value){  //check if there's enough in the drawer
            currVal += next.value;  //while there is enough in the drawer and the amount of change is still greater than the value at the current index of moneyValues, add that value to our currVal 
            changeDue -= next.value;  //decrement our change
            changeDue = Math.round(changeDue*100)/100;
            cid[index][1] -= next.value;  //decrement from our cid (taking out bill/coin from the slots in the drawer)
          }
          acc.push([next.name, currVal]); //add the name of the bill/coin and the amount of bill(s)/coin(s) needed in summing up to the change amount into our accumulator  
          return acc; 
        }else{   
          return acc; 
        }
    }, []);
  }
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArr}; 
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));