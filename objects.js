// We are creating the Object named person.
var person ={
    favName: "Rashmi",
    favColor: "Blue",
    favFood: "Pizza",
    favNumber: 2,
    isMarried: true,
    children: ["child1","child2"],
    favThing: {
        thingName: "object",
        color: "Orange"
    }
}

// dot Notation
console.log(person)
console.log(person.isMarried)
console.log(person.children)
console.log(person.children[1])
console.log(person.favThing.thingName)

//Bracket Notation

console.log(person["favName"])
console.log(person["isMarried"])
console.log(person["children"])
console.log(person["children"][0])
console.log(person["children"][1])
console.log(person["favThing"]["thingName"])