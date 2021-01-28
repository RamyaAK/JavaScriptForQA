// We use the conditional statements like if, if-else, and Switch statements to make decesions.

// if statement
var myName = "Ramya";
var yourName = prompt("What is your name?");

if(myName == yourName){
    console.log("Hello "+yourName+"! my Name is "+myName+" too! So glad to meet you.");
}

// if-else statement
if(myName == yourName){
    console.log("Hello "+yourName+"! my Name is "+myName+" too! So glad to meet you.");
}
else{
    console.log("Hi "+yourName+" my name is "+myName+" Nice to meet you!");
}

// Switch statement

    var i = prompt("Enter one Number from 0 to 50 to guess");
    var answer = parseInt(i); // need to convert the input string to an integer
    switch(true){
        case (answer<=10): "This is a number is lessthan or equal to 10";
        break;
        case (answer<=20): "This is a number is lessthan or equal to 20";
        break;
        case (answer<=30): "his is a number is lessthan or equal to 30";
        break;
        case (answer<=40): "his is a number is lessthan or equal to 40";
        break;
        case (answer<=50): "his is a number is lessthan or equal to 50";
        break;
    }

// switch statement example 2
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }