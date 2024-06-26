// Problem Statement: Given an integer N, return the number of digits in N.

// mine
let num = 0.4542
let str = String(num)
console.log(`The number ${num} has ${str.length} digit`)

// bruct force
function countDigit(num){
    let count = 0;
    while(num > 0){
        count++
        num = Math.floor(num / 10)
    }
    return count
}

console.log(countDigit(7745))

// optimal
function countDigit2(num){
    let cnt = Math.floor(Math.log10(num) + 1)
    return cnt
}

console.log(`The digit has ${countDigit2(12345)}`)