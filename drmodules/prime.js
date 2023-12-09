// Prime Number Checker 

function IsPrime(num) {
  if (num <= 1) return false;
  if (num % 2 === 0 && num !== 2){
    return false;
  }
  const result = [];
  const limit = Math.sqrt(num);
  for (let i = 3;i < limit;i += 2){
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