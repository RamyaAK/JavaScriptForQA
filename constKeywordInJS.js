// const == if declared with the const keyword then it will be holding the assigned value to it permanently for fixed. cannot be changed later like we used to do in while using var keyword.

const MAX_VALUE =200 // fixed one time defining of MAX_VALUE and cannot be modified.

const PI = 3.142 //good declaration.
//const PI // bad declaration.

console.log(MAX_VALUE)
console.log(PI)

// MAX_VALUE = 100
// console.log(MAX_VALUE) // gives an error message that const cannot be reassigned a new value.

const myFixedArray = [1,3,4,5]
console.log(myFixedArray)

myFixedArray[1]=2
console.log(myFixedArray) // this will replace the value inside of the array index specified.