let num1 = 11;
let num2 = 5

// activity-1
// add
function add(n1, n2) {
    console.log('add: ', n1 + n2)
}
add(num1, num2)
// subtract
function sub(n1, n2) {
    console.log('sub: ', n1-n2)
}
sub(num1, num2)
// multiply
function mul(n1, n2){
    console.log('mul: ', n1*n2)
}
mul(num1, num2)
// divide
function div(n1, n2){
    console.log('div: ', n1/n2)
}
div(num1, num2)
// reminder
function remi(n1, n2){
    console.log('remi: ', n1%n2)
}
remi(num1,num2)

// activity-2

// +=
console.log('+=: ', num1+=num2)
// -=
console.log('-=: ',num1-=num2)

// activity-3
// >,<
function com1(n1, n2){
    if(n1>n2){
        console.log('>: ',true)
    } else {
        console.log('>: ',false)
    }

    if(n1<n2){
        console.log('<: ',true)
    } else {
        console.log('<: ',false)
    }
}
com1(num1, num2);

// >=,<=
function com2(n1, n2){
    if(n1>=12){
        console.log('>=: ',true)
    } else {
        console.log('>=: ',false)
    }

    if(n2<=4){
        console.log('<=: ',true)
    } else {
        console.log('<=: ',false)
    }
}
com2(num1, num2);

// The == operator compares the values of two variables after performing type conversion if necessary. 
//  On the other hand, the === operator compares the values of two variables without performing type conversion.

console.log('==: ', num1 == "11")
console.log('===: ', num2 === "5")

// activity-4

function logical(){
    if(num1 > num2 && num2 > num1){
        console.log(`&&: condition is fullfilled`)
    } else {
        console.log(`&&: condition is not fullfilled`)
    }

    if(num1 >= 132 || num2 <= 4){
        console.log(`||: condition is fullfilled`)
    } else {
        console.log(`||: condition is not fullfilled`)
    }

    if(num1 !== 11) {
        console.log(`!==: condition is fullfilled`)
    } else {
        console.log(`!==: condition is not fullfilled`)
    }
}
logical()

// activity - 5
function posiAndNega(num) {
    (num > 0) ? console.log(`${num} is positive number`) : console.log(`${num} is negative number`)
}
posiAndNega(num1)