// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

// approach 1 using loops
// function sumOfNumber(n){
//     let sum = 0
//     while(n>=1){
//         sum += n;
//         n--
//     }
//     return sum
// }

// approach 2
// function sumOfNumber(n, sum){
//     if(n<1){
//         console.log(sum)
//         return
//     }
//     sumOfNumber(n-1, sum+n)
// }

// apporach 3
function sumOfNumber(n){
    if(n==0){
        return 0
    }
    return n + sumOfNumber(n-1)
}
console.log(sumOfNumber(5))