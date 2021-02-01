var answer = prompt("do you love cheese?")
var isTrue
if(answer == "Yes"||"yes"||"Y"||"y"||"yeah"||"Yeah"){
    isTrue = true
}else{
    isTrue = false
}

if(isTrue == true){
    console.log("Okay! I like Cheese too");
}
else{
    console.log("Okay! then what do you like more than cheese?");
}