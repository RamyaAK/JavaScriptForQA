// Activity: Family Tree object creation 

var myFamily = {
    father:{
        firstName:"Arvind",
        lastName:"Kulkarni",
        isAlive: false,
        isHeadOftheFamily: true
    } ,
    mother:{
        firstName:"Jayashree",
        lastName:"Kulkarni",
        isAlive: true,
        isHeadOftheFamily: false
    } ,
    children: [{
        child1FirstName:"Rashmi",
        child1LastName:"Kulkarni",
        isAlive: true,
        isMarried: true,
        staysWithParents: false
    },
    {
        child2FirstName:"Ramya",
        child2LastName:"Kulkarni",
        isAlive: true,
        isMarried: false,
        staysWithParents: true
    }
],
    pet: {
        firstName:"goldfish",
        lastName:"rockstar",
        isAlive:false
    },

    isHappy: true,
    isRichFamily: false,
    isEducated: true
}

console.log(myFamily)
console.log("What is your Dad's Name? "+myFamily.father.firstName+" "+myFamily.father.lastName)
console.log("What is your Mom's Name? "+myFamily.mother.firstName+" "+myFamily.mother.lastName)
console.log("Is your family Educated? "+myFamily.isEducated)
console.log("Is your family a Happy Family? "+myFamily.isHappy)
console.log("Is your family Rich? "+myFamily.isRichFamily)
console.log("Is your father the head of the family? "+myFamily.father.isHeadOftheFamily)
console.log("What is the name of your pet? "+myFamily.pet.firstName)
console.log("what is the last name of your pet? "+myFamily.pet.lastName)
console.log("How many children are there in your family? "+myFamily.children.length)
