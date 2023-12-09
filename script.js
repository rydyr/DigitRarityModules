import * as DRM from './index.js';

const valid = [0,6,8,9];

if (DRM.RotationChecker(619,valid,DRM.PerHelper)) {
   console.log(`yes`);
} else {
  console.log('no')
}
