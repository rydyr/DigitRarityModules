import * as DRM from './index.js'


const validAmb = [0,1,6,8,9];
const validStr = [0,1,6,8,9];
const validPer = [0,6,8,9];

// Examples of DRM codes

if (DRM.RotationChecker(66099,validStr,DRM.StrHelper)) {
  console.log('This is a Valid Strobogrammatic Number')
}