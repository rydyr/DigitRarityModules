// Sequential Checker

function Sequential(num,func) {
   const result = [];
   const numArray = num.toString().split('').map(Number);
  for (let i = 0; i < numArray.length; i++) {
     if (numArray[i] === func(numArray[0],i)) {
        result.push(true)
     } else {
       result.push(false)
     }  
  }
  if (result.every(value => value)) {
     return true;
  } else {
    return false;
  } 
}

export default Sequential 

function add(num1,num2){
  return num1 + num2;
}
function sub(num1,num2){
  return num1 - num2;
}
