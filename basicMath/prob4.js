// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

// mine - wrong apporach
// function gcd(num1, num2){
//     let fact = 1;
//     let arr = []
//     if(num1<0||num2<0){
//         console.log('Error can not find the gcd of negative numbers')
//     } else if(num1 == 0|| num2 ==0){
//         console.log('GCD of zero is 1')
//     } else {
//         for(let i = 1; i < num1; i++){
//             if(num1%i === 0){
//                 arr.push(i)
//             }
//         }
//     }

//     for(let i = 1; i< arr.length; i++){
//         if(num2%arr[i] === 0){
//             if(arr[i]>fact){
//                 fact = arr[i]
//             }
//         }
//     }
//     return fact
// }

// brute force
// function gcd(num1, num2){
//     let fact = 1;
//     if(num1<0||num2<0){
//         console.log('Error can not find the gcd of negative numbers')
//     } else if(num1 == 0|| num2 ==0){
//         console.log('GCD of zero is 1')
//     } else {
//         for(let i = 1; i <= Math.min(num1,num2); i++){
//             if(num1%i === 0 && num2%i===0){
//                 fact = i
//             }
//         }
//     }
//     return fact
// }

// better apporach
function gcd(num1, num2){
    for(let i = Math.min(num1,num2); i > 0; i--){
        if(num1%i === 0 && num2%i===0){
            return i
        }
    }
    return 1
}

// optimal
// function gcd(num1, num2){
//     while(num1>0 && num2>0){
//         if(num1>num2){
//             num1 = num1%num2
//         } else{
//             num2 = num2%num1
//         }
//     }

//     if(num1===0){
//         return num2
//     } 
//      return num1
// }

console.log(gcd(11, 13))