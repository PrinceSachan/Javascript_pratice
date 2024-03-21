let num = 153
let sum = 0

function armStrong(number){
    let numberString = number.toString();
    let numberDigit = numberString.length;
    for(let digit of numberString){
        sum += Math.pow(parseInt(digit), numberDigit)
    }
    return sum === number
}

console.log(armStrong(1634));