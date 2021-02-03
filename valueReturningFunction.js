// functions can not only print something but can also compute and perform calculations and return the results back to the calling function.

function computeFactorial(n){
    if(n < 0){
        console.log("Factorial of negative numbers is not possible")
        return 0;
    }
    else if(n===0){
        console.log("Factorial of zero is always 1")
        return 1;
    }
    else {
        let fact = 1;
        for (i = 1; i <= n; i++) {
            fact *= i;
        }
        console.log("The factorial of "+n+" is "+fact);
        return fact;
    }
}

console.log(computeFactorial(5))