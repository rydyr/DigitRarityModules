// Ambigram Helper Function

function AmbHelper(num1,num2) {
  if (num1 === 0 && num2 === 0 || num1 === 1 && num2 === 1 || num1 === 2 && num2 === 5 || num1 === 5 && num2 === 2 || num1 === 6 && num2 === 9 || num1 === 8 && num2 === 8 || num1 === 9 && num2 === 6){
    return true;
  } else {
    return false;
  }
};

export default AmbHelper;