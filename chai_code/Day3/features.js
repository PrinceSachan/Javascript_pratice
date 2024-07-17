// feature -1 
function task1(num) {
    if(num === 0) {
        console.log(`${num} is 0`)
    } else if(num>0) {
        console.log(`${num} is positive`)
    } else {
        console.log(`${num} is negative`)
    }
}

task1(0)
task1(11)
task1(-1)

// feature - 2
function task2(age) {
    if(age>=18) {
        console.log(`Eligible`)
    } else {
        console.log(`Not Eligible`)
    }
}

task2(20)
task2(11)

// feature - 3
function task3(day) {
    switch (day) {
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
            console.log(`Sorry! Incorrect input, day should be in range of 1-7`)
    }
}

task3(1);
task3(4)
task3(8)

// feature - 4

function task4(score) {
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

task4(33)
task4(43)
task4(60)
task4(66)
task4(75)
task4(88)
task4(100)
task4(-1)
task4(101)

// feature - 5
function task5(year){
    if(year%4===0){
        if(year%100!==0){
            if(year%400===0){
                console.log(`Year ${year} is leap year`)
            } else {
                console.log(`Year ${year} is not leap year`)
            }
        } else {
            console.log(`Year ${year} is Leap year`)
        }
    } else {
        console.log(`Year ${year} is not leap year`)
    }
}

task5(1992)
task5(2000)
task5(2024)
task5(1900)