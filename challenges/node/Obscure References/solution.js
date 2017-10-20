function doMaths(maths) {                 // Takes an array of numbers
  // The problem is this copy
  // because when an object (ie. an array) is passed to a function,
  // it is passed by reference. Therefore any copies of it, and the array
  // you passed, are mutated when you edit the original.
  // Therefore everything that happens to maths, happens to mathsCopy,
  // therefore at the end the difference is all 0
  // OLD: var mathsCopy = maths;
  var mathsCopy = maths.slice(0);
  // NEW: Slice it. Slice returns a brand new array, so the problem should not occur.

  for (var i = 0; i < maths.length; i++) {// Loop through array
    maths[i] = maths[i] * maths[i]        // Square each element
  }
  return maths.map( (el, i) => {          
    return el - mathsCopy[i]              // Return all of the elements in maths, subtract all of the elements in mathsCopy
  })
}

console.log(doMaths( [ 1,2,3,4,5 ] ))