//Concate, lowerCase, upperCase, Reverse, trim, 
//substr,substring, length, indexOf, lastIndexOf,search,
//slice, replace, replace with match, repeat, charAt, charCodeAt
//valueOf, startsWith, endsWith, includes, match, prototype

var str1="Hello"
var str2="World!"

//concatenating 2 or more strings
console.log(str1+" "+str2);
console.log(str1.concat(str2)) // No spaces added when using concat method

//convert to lowercase
console.log(str1.toLowerCase())

//convert to Uppercase
console.log(str2.toUpperCase())

//string Reverse
var numString = ["1","2","3","4","5"]
console.log(numString.reverse())

//trim
mystr = "  Trimming extra spaces from the starting & end of the string   "
console.log(mystr.trim()) // removes any trailing extra spaces from the string.

//substr will Extract parts of a string
var testString = "Hello World!"
console.log(testString.substr(2))
console.log(testString.substr(2,4))

//substring will Extract characters from a string
console.log(str2.substring(2,5))
console.log(str2.substring(2))

// string Length
console.log(str2.length)
console.log(numString.length)

//indexOf str1 i.e hello
console.log(str1.indexOf('o'))

//lastIndexOf an item "Apple" in myArray
var myArray=["Apple","Banana","Grapes","Papaya","Apple","Mango","Strawberry","Apple"]
console.log(myArray.lastIndexOf("Apple"))

//search in for a match in a string and return its starting position.
var myName ="My Name is Ramya, I love to code!"
console.log(myName.search("Ramya"))

// slice operations
console.log(str2.slice(0)) // returns the original value without slicing
console.log(str2.slice(2)) // returns the string value after skipping starting two chars
console.log(str2.slice(2,5)) // retruns the chars from 2nd index to 5-1 i,e 4th index

// replace contents in a string
console.log(str1.replace("H","J"))
console.log(str2.replace("W","B"))

// replace with match string.replace(searchvalue, newvalue)
var replaceString = "My dog is very very playful and active"
console.log(replaceString.replace("dog","cat"))
console.log(replaceString.replace(/very/g,"so")) // g stands for global match in regex

// repeat in String methods will repeat the string in action for any specified number of times given as I/P param
console.log(str1.repeat(2))

// charAt
console.log(str1.charAt(3)) // returns the character at the index position specified.

// charCodeAt returns the unicode for the character at specified index
console.log(str1.charCodeAt(1))

// fromCharCode convert a unicode number back to character
console.log(String.fromCharCode(65)) // returns Unicode character in String A

// valueOf returns the primitive value of the string
console.log(str1.valueOf())

// startsWith will Check if a string starts with "Hello" and returns tre or false based on the condition
var newStr = "Hello World!"
console.log(newStr.startsWith("Hello"))

// endsWith will Check if a string ends with "World and returns true or false accordingly"
console.log(newStr.endsWith("World!")) // true
console.log(newStr.endsWith("World")) // false ! is missing at the end.

// includes will check if the whole string includes or conatins the string specified and returns t or f
console.log(newStr.includes("Hell"))

// match will display all the matched characters
var matchStr = "The rain in SPAIN stays mainly in the plain"
console.log(matchStr.match(/ain/g))

// Use the String prototype property to add a new property to all objects of a given type
function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
  }
  employee.prototype.salary = 9000000000; // adding new property to the employee object.
  var ramya = new employee("Ramya A Kulkarni", "SDET", 1993);
  console.log(ramya.salary)
