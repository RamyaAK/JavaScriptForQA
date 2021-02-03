// start triangle
for(var i=1; i<=5; i++){
    console.log("*".repeat(i));
 }

// diamond of stars

let str5 = "";
var y=10
var x=10
for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
        if (i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1)) {
            str5 = str5.concat("*");
        } else if (i >= y / 2
            && j > ((y / 2) - i) * (-1)
            && j < (y - ((y / 2) - i) * (-1))) {
            str5 = str5.concat("*")
        }
        else {
            str5 = str5.concat(" ")
        }
    }
    str5 = str5.concat("\n")
}
console.log(str5)