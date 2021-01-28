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

    var i = prompt("Enter one Number from 0 to 100 to guess");
    var answer = parseInt(i); // need to convert the input string to an integer
    switch(true){
        case (answer<=10): "This number is lessthan or equal to 10";
        break;
        case (answer<=20): "This number is lessthan or equal to 20";
        break;
        case (answer<=30): "This number is lessthan or equal to 30";
        break;
        case (answer<=40): "This number is lessthan or equal to 40";
        break;
        case (answer<=50): "This number is lessthan or equal to 50";
        break;
        case (answer<=60): "This number is lessthan or equal to 60";
        break;
        case (answer<=70): "This number is lessthan or equal to 70";
        break;
        case (answer<=80): "This number is lessthan or equal to 80";
        break;
        case (answer<=90): "This number is lessthan or equal to 90";
        break;
        case (answer<=100): "This number is lessthan or equal to 100";
        break;
        default: "This is some number greater than 100, Please Enter a number between 0 to 100 only!";
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