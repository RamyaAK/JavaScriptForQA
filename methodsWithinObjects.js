// library object with chekIn and checkout as methods within the object.

var library={
    bookName: "The Road Ahead",
    bookId:"124681",
    checkOut: function(){
        console.log("You have checked out the book!-- "+this.bookName)
    },
    checkIn: function(){
        console.log("Thank You! you have checked In the "+this.bookName+" book back.")
    },
    Author:"Bill Gates",
    publication:"ISBN"
}

console.log("This Book Author Name is "+library.Author)
console.log(library.checkOut())
console.log(library.checkIn())