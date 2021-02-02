// make a list of your fav books

var books =[]

var answer = prompt("Enter your first fav book name")
books.push(answer)

var answer = prompt("Enter your second fav book name")
books.push(answer)

var answer = prompt("Enter your third fav book name")
books.push(answer)

var answer = prompt("Enter your fourth fav book name")
books.push(answer)

var answer = prompt("Enter your fifth fav book name")
books.push(answer)

var answer = prompt("Enter your sixth fav book name")
books.unshift(answer)
console.log(books)

books.pop()

console.log(books)


