// Prompt asking for the amount the user is paying.  Also tell the user how much they owe.

// A function that takes the amount the user paying

// The function should subtract the amount payed from the original cost

// The function should return the difference from the calculation

// You then need a statement that will give 1 of 3 different responses. You can just use the console.log() statement.

//     You gave the exact amount.

//     You gave too much. Your change due is $x.xx.

//     You gave too little. You still owe $x.xx.

// var totalMoney = 1000
// var userPay = prompt("Please enter the amount that you wish to pay now. You actually owe $1000")
// amount = parseInt(userPay)
// function simpleCashier(amount) {
//     var amount_due;
//     amount_due = totalMoney - amount;
//     return amount_due;
// }

// var result = simpleCashier(amount);
// if(result == 0){
//     console.log("You gave the exact amount.")
// }
// else if(result<=totalMoney){
//    console.log("You gave too little. You still owe $"+result)
// }
// else if(result >= totalMoney){
//     console.log("You gave too much. Your change due is $"+result)
// }




var owe = 3450

var payment = prompt("You owe $" + owe + ". How much do you want to pay?")


function paymentMng(originalCost, moneyIn) {

remaining = originalCost - moneyIn

return remaining

}

var remaining = paymentMng(owe, payment)

console.log(remaining)

if (remaining<0){ console.log("You gave too much. Your change due is $" + Math.abs(remaining))}

if (remaining==0){ console.log("You gave the exact amount")}

if (remaining>0){ console.log("You gave too little. You still owe $" + remaining)}