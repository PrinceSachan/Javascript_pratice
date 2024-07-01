// Problem Statement: Given a number X,  print its factorial.

// iterative apporach
// function fact(n){
//     let sum = 1
//     if(n <= 0){
//         return 1
//     }
//     for(let i = 1; i < n; i++){
//         sum += sum * i
//     }
//     return sum 
// }

// recursive apporach
function fact(n){
    if(n<=0){
        return 1
    }

    return n * fact(n-1)
}

console.log(fact(5))