# Digit Rarity Modules 

### Content
1. About
2. Getting Started
3. Modules

---

## About

Digit Rarity is a "learn as you go" project started by rydyr.eth a member of the Ethereum Name Service community and digit enthusiast. 

As part of a continuing effort to improve coding skills the functional elements of Digit Rarity have become a collection of modules.

These modules will underpin the second version of Digit Rarity, allowing considerable reduction in size and complexity compared to the original code base. It also allows these modules to be used together or individually in other projects aside from Digit Rarity. 

This README assumes some basic knowledge of JavaScript but aims to make the use of Digit Rarity Modules easy.

## Getting Started 

To get started first clone the repository. 

if you choose to use the Modules individually you can simply import the Module

```javascript import Module from './path/to/module.js';```

or you can import all from the index.js file

```javascript import * as DRM from './index.js ';```

## Modules 

1. Palindrome
2. RotationChecker
   1. AmbHelper
   2. StrHelper
   3. PerHelper
3. Has420
4. Has69
5. IsPrime
6. Sequential
   1. Add
   2. Sub


### Palindrome 

This Module is used to check if a number is a palindrome and requires a numerical input. A palindrome is a number that reads the same forwards and backwards.

```javascript console.log(Palindrome(inputNum)); // console output -> true/false ``` 

### RotationChecker 

This Module is used to check if a number has rotational characteristics. It requires a numerical input, an array of valid numbers and a helper function. Each helper function provides the logic needed to determine the specific type of rotation. There are 3 possible configurations for RotationChecker:

  #### AmbHelper 

  The first configuration is for the identification of Ambigrams. An Ambigram is a number that can be rotated 180 degrees and still be correctly read, often as a new number. A valid ambigram can only contain 0,1,6,8, and 9 in any order. The script.js file in this repo has an array 'validAmb' already defined to use in conjunction with AmbHelper within RotationChecker.

  ```javascript console.log(RotationChecker(inputNum,validAmb,AmbHelper)); // console output -> true/false```

  #### StrHelper 

  The second configuration is for the identification of Strobogrammatic numbers. Strobogrammatic numbers are a subset of Ambigrams whereby the number can be rotated 180 degrees but remains the same number. A valid Strobogrammatic number can only contain 0,1,6,8 and 9 in a balanced order. The script.js file in this repo has an array 'validStr' for use in conjunction with StrHelper within RotationChecker. 

  ```javascript console.log(RotationChecker(inputNum,validStr,StrHelper)); // console output -> true/false```

  #### PerHelper 

  This third and final configuration is for the identification of Perfect Print numbers. Perfect Print numbers are a subset of Strobogrammatic numbers whereby the number can be rotated 180 degrees and remain the same number, but additionally displays the same regardless of serif. A valid Perfect Print number can only contain 0,6,8, and 9 in a balanced order. The script.js file in this repo has an array 'validPer' to use in conjunction with PerHelper within RotationChecker. 

  ```javascript console.log(RotationChecker(inputNum,validPer,PerHelper)); // console output -> true/false```

### Has420 

This Module is used to determine if the number contains the meme number 420. It only requires a numerical input. 

```javascript console.log(Has420(inputNum)); // console output -> true/false ```

### Has69

This Module is used to determine if the number contains the meme number 69. It only requires a numerical input. 

```javascript console.log(Has69(inputNum)); // console output -> true/false ```

### IsPrime

This Module is used to determine if the number is a prime number. It only requires a numerical input.

```javascript console.log(IsPrime(inputNum)); // console output -> true/false```

### Sequential 

This Module is used to determine if the number is arranged in a sequential order. It requires a numerical input and a helper function. There are 2 possible configurations whereby the helper functions provide the logic needed to determine ascending or descending order.

  #### Add

  This is ascending order 

  ```javascript console.log(Sequential(inputNum,Add)); // console output -> true/false```

  #### Sub

  This is descending order

  ```javascript console.log(Sequential(inputNum,Sub)); // console output -> true/false```