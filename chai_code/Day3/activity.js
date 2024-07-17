// activity 1
let num = 0
if(num > 0){
    console.log(`${num} is positive integer`)
} else if(num < 0){
    console.log(`${num} is negative integer`)
} else {
    console.log(`${num} is zero`)
}

let age = 20
if(age >= 18) {
    console.log(`person is eligible to vote`)
} else {
    console.log(`person is not eligible to vote`)
}

// activity 2
function largest(n1, n2, n3){
    if(n1 > n2) {
        if(n1 > n3) {
            console.log(`${n1} n1 is largest`)
        } else {
            console.log(`${n3} n3 is largest`)
        }
    } else {
        if(n2 > n3){
            console.log(`${n2} n2 is largest`)
        } else {
            console.log(`${n3} n3 is largest`)
        }
    }
}

largest(1, 2, 3)

// activity 3
const number = 8
switch (number) {
    case 1:
        console.log('Sunday')
        break;
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thrusday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('Saturday')
        break;
    default:
        console.log(`Sorry! Incorrect input, ${number} number should be in range of 1-7`)
}

// To use a switch statement for handling ranges, you can use a technique called "fall-through" by not using break statements until the appropriate range is found. 
// This approach involves intentionally not breaking out of the switch statement until the correct case is reached.
function grade(score) {
    switch(true){
        case (score>=0&&score<=33):
            console.log("F")
            break;
        case (score>=34&&score<=50):
            console.log("E")
            break;
        case (score>=51&&score<=60):
            console.log("D")
            break;
        case (score>=61&&score<=70):
            console.log("C")
            break;
        case (score>=71&&score<=80):
            console.log("B")
            break;
        case (score>=81&&score<=90):
            console.log('A')
            break;
        case (score>=91&&score<=100):
            console.log('A+')
            break;
        default:
            console.log(`Put a valid score between 0 - 100`)
            break;
    }
}
grade(33)
grade(43)
grade(60)
grade(66)
grade(75)
grade(88)
grade(100)
grade(-1)
grade(101)

// activity 4

function task6(num) {
    (num % 2===0) ? console.log(`Number is even` ): console.log(`Number is odd`)
}

task6(7)
task6(8)

// acitvity 5

function task7(year){
    // if(year%4===0){
    //     if(year%100!==0){
    //         if(year%400===0){
    //             console.log(`Year ${year} is leap year`)
    //         } else {
    //             console.log(`Year ${year} is not leap year`)
    //         }
    //     } else {
    //         console.log(`Year ${year} is Leap year`)
    //     }
    // } else {
    //     console.log(`Year ${year} is not leap year`)
    // }

    if((year%4===0&&year%100!==0) || (year%400===0)) {
        console.log('Leap year')
    } else {
        console.log('Not a leap year')
    }
}

task7(1992)
task7(2000)
task7(1900)