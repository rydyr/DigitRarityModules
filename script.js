import * as DRM from './index.js';

const rot = [0,1,6,8,9];

const temp = [];
for (let i = 0; i < 100000; i++) {
   let par = i.toString().padStart(5,'0');
  if (DRM.RotationChecker(par,rot,DRM.StrHelper)) {
     temp.push(par);
  }
  
}
const [first,second,third] = temp;
console.log(temp.length)
console.log(temp)


