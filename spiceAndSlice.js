// splice and slice
// splice -- add remove or insert an element into the array.
//slice -- take the part of items from one array and create a new array out of it.

//splice
var container =["red","blue","green","brown"]
container.splice(0,0,"blak") // adding an element in the first position
console.log(container)

container.splice(0,1) // remove the first element from the array
console.log(container)

container.splice(0,1,"black")  // removes the first element from the array and adds black in its place.
console.log(container)

//slice
var container =["red","blue","green","brown"]
var newContainer =container.slice(2,4)

console.log(newContainer)

