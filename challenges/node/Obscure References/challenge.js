/*
TASK:
Write a function that takes an array of numbers. It should square the numbers,
then subtract the input from the squared output.

ATTEMPT:
*/


function doMaths(maths) {                 // Takes an array of numbers
  var mathsCopy = maths;                  // Copies the array
  for (var i = 0; i < maths.length; i++) {// Loop through array
    maths[i] = maths[i] * maths[i]        // Square each element
  }
  return maths.map( (el, i) => {          
    return el - mathsCopy[i]              // Return all of the elements in maths, subtract all of the elements in mathsCopy
  })
}

// Input:
// [1, 2, 3, 4, 5]
// Maths:
// [1, 4, 9, 16, 25]
// [1-1, 4-2, 9-3, 16-4, 25-5]
// Expected output:
// [0, 2, 6, 12, 20]
// Actual output:
// [0, 0, 0, 0, 0]
console.log(doMaths( [ 1,2,3,4,5 ] ))