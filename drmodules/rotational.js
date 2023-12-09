// Rotational Checker 
// *ambigram, strobogrammatic, perfect print * // 


function RotationChecker(num,arr,func) {
   const numArray = num.toString().split('').map(Number);
   const check = numArray.every(num => arr.includes(num));
   const result = [];
   if (check) {
     const div = Math.floor(numArray.length / 2);
     const rdiv = numArray.length - div;
     const left = numArray.slice(0,div);
     const right = numArray.slice(rdiv).reverse()
     for (let i = 0; i < div; i++) {
        result.push(func(left[i],right[i]));
     }
     if (num.length % 2 !== 0 && func === 'PerHelper') {
        if (num[div + 1] != 0 || num[div + 1] != 8) {
           return false;
        } 
     }
     
     const final = result.every(value => value);
     if (final) {
        return true;
     } else {
        return false;
     }
   } else {
     return false;
   }
}

export default RotationChecker