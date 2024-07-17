// act - 1 function declaration
function task1(num) {
    return (num%2===0) ? 'Even' : 'Odd'
}
console.log(task1(8))

function task2(num) {
    // console.log(num ** 2)
    console.log(Math.pow(num, 3))
}

task2(4)

// act - 2 function expression
const task3 = function(n1, n2) {
    // return (n1 > n2) ? n1 : n2
    console.log(Math.max(n1, n2))
}
// console.log(task3(10,3))
task3(11, 14)

const task4 = function(str1, str2) {
    // let res = str1.concat(" ", str2)
    // console.log(res)
    console.log(str1 + " " + str2)
}
task4('Hello', 'World!')

// act - 3 arrow function
task5 = (n1, n2) => {
    console.log(n1 + n2)
}

task5(2, 3)

task6 = (str, v) => {
    return (str.includes(v)) ? true : false
}
console.log(task6('Hello', 'a'))

// act - 4 
function task7(a, b = 2) {
    console.log(a * b)
}
task7(5, 3)
task7(5)

function task8(name, age = 18){
    console.log(`Hi ${name}, good morning, you have been trun ${age} today`)
}

task8('Prince', 27)
task8('Madhur')