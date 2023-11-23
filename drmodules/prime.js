// Prime Number Checker 

function IsPrime(num) {
  const result = [];
  for (let i = 2;i < num - 1;i++){
    if (num % i === 0) {
       result.push(false)
    } else {
       result.push(true)
    } 
  }
  const seeResult = result.every(value => value);
  if (seeResult) {
     return true;
  } else {
     return false;
  }
}

export default IsPrime;