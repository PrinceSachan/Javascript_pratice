// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

function arm(num){
    const length = String(num).length;
    let n = num;
    let sum = 0
    while(num > 0){
        let lastdigit = num % 10;
        sum += Math.pow(lastdigit, length)
        // sum += lastdigit ** length
        num = Math.floor(num/10)
    }

    return (sum == n) ? true : false
}

console.log(arm(153))