// Factorial of a Number : Iterative and Recursive

// recursion
function fact(n) {
    if(n <= 1) return 1
    return n * fact(n-1)
}

console.log(fact(5))

// iterative
let num = 5;
let sum = 1
if(num <= 1) {
    return 1
} else {
    for(let i = 1; i <= num; i++){
        sum  = sum * i
    }
    // return sum
}

console.log(sum)