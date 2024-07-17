// act - 1
function task1(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}
task1(10)

function task2(num) {
    for (let i = 1; i <= num; i++) {
        let res = 5 * i
        console.log(`5 * ${i} = ${res}`)
    }
}
task2(10)

// act - 2
function task3(num) {
    let sum = 0
    while(num>=1){
        sum+=num
        num--
    }
    console.log(sum)
}

task3(10)

function task4(num) {
    while(num>=1){
        console.log(num)
        num--
    }
}

task4(10)

// The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.
function task5(num) {
    let i = 1;
    do{
        console.log(`dowhile`, i)
        i++
    }
    while(i<=num)
}
task5(5)

function task6(num) {
    let count = num
    let fact = 1
    do{
        fact*=num
        num--
    }
    while(num!=0)
    console.log(`fatorial of ${count}:`, fact)
}
task6(5)

// act - 4
let num = 5;
let str = "";
for(let i = 0; i<num; i++){
    for(let j = 0; j<=i; j++){
        str+="*"
    }
    str+='\n'
}
console.log(str)

// act - 5
// The continue statement breaks one iteration (in the loop) {skip}, if a specified condition occurs, and continues with the next iteration in the loop.

function task7(num) {
    for(let i = 1; i<=num; i++){
        if(i===5) { continue }
        console.log(i)
    }
}

task7(10)

// The break statement can also be used to jump out of a loop:
function task8(num) {
    for(let i = 1; i <= num; i++){
        if(i===7) {break}
        console.log(i)
    }
}

task8(10)