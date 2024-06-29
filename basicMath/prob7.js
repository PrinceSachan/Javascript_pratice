// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

// brute force
// function prime(n){
//     let count = 0
//     for(let i = 1; i <= n; i++){
//         if(n%i == 0){
//             count++
//         }
//     }

//     return (count === 2) ? true : false
// }

// optimal
function prime(n){
    let count = 0;
    let sqrt = Math.sqrt(n)

    // for loop run upto only sqrt for any given number
    for(let i = 1; i <= sqrt; i++){ 
        if(n%i == 0){
            count ++
            if(n/i !== i){
                count ++
            }
        }
    }
    // console.log(n)
    // console.log(count)
    return (count === 2) ? true : false
}

console.log(prime(1484))