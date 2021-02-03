//for loop
console.log("Using for Loop")
for(var i=0;i<5;i++){
    console.log(i)
}

// while loop
console.log("Using while Loop")
var i=0
while(i<5){
    console.log(i)
    i++
}
// are you happy with while loop:
var answer
var happiness = true
while(happiness = true){
    answer = prompt("Are you happy?")
    if(answer =="Yes"||"YES"||"Yeah"||"YEAH"){
        console.log("You are happy!")
    }

    else{
        happiness = false
        console.log("You are not happy!")
        break;
    }
}

//do while loop
console.log("Using do while Loop")
var i=0
do{
    console.log(i)
    i++
}while(i<5)
