// get costs of veggies and fruits by using functions.

var item = prompt("Enter the vegitable or fruit name to know its price")
var myVeggies =["Cucumber","Onions","Green chilli","Tomatoes","Spinach","Potatoes","Beans"]
var myFruits =["Apple","Orange","Pomogranate","Watermelon","Grapes","Papaya","Banana"]
var costs =[100,200,300,400,500,600,700]
function getcost(item){
    for(var i=0;i<myVeggies.length;i++){
        if(item == myVeggies[i]){
           console.log(myVeggies[i]+" is of "+costs[i]+" Rupees per Kg.");
        }
    }
    for(var i=0;i<myFruits.length;i++){
        if(item == myFruits[i]){
           console.log(myFruits[i]+" is of "+costs[i]+" Rupees per Kg.");
        }
    }
}
getcost(item); // function call
