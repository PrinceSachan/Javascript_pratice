// Problem Statement: Given an integer N, return all divisors of N.

// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

// inefficient apporach
// function divisior(num){
//     let arr = []
//     for(let i = 1; i <= num; i++){
//         if(num%i == 0){
//             arr.push(i)
//         }
//     }
//     return arr
// }

// optimal apporach
function divisor(num){
    let divisor = []
    let sqrt = Math.sqrt(num)
    for(let i = 1;i <= sqrt; i++){
        if(num%i == 0){
            divisor.push(i)
            if(i !== num/i){
                divisor.push(num/i)
            }
        }
    }
    return divisor
}

console.log(divisor(36))