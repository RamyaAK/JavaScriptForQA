var answer = prompt("Enter Yes or No")

var answers =["Yes","No"]
var response =["You said Yes!","You said No!","You did not follow the instructions properly"]

for(var i =0;i<2;i++){
    
    if(answer!=answers[0] && answer!=answers[1]){
        console.log(response[2])
    }
    else if(answer == answers[i]){
        console.log(response[i])
    }
}