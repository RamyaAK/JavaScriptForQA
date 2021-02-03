//nested forLoop - forLoop inside of another forloop is called as nested forLoop

var numbers =[1,2,3,4,5]
var alpha=["a","b","c"]

for(var i=0;i<numbers.length;i++)
{
    console.log(numbers)

    for(var j =0;j<alpha.length;j++){
        console.log(alpha)
    }
}

// Multiplication table generator:
console.log("Generating Multiplication Table: ")
var number = prompt("Enter one number")

for(var i=0;i<=10;i++){
    console.log(number+" x "+i+" = "+i*number)
}


// Linear Search

var itemList = [2,1,4,5,6,1,9,10,23,81,62,2,1,4]

var searchItem = 2

for(var i =0;i<=itemList.length;i++){
    if(itemList[i]==searchItem)
    {
        console.log("found the number "+searchItem+" at the position "+ i)
    }
}