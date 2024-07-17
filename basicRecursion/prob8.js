// Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

//apporach 1
// function fib(n){
//    if (n<=0) {
//     return n
//    }

//    let fibseq = [0, 1]
//    for(let i = 2; i <= n; i++){
//     let nextFib = fibseq[i-1] + fibseq[i-2]
//     fibseq.push(nextFib)
//    }

//    console.log(fibseq.toString())
// }


// apporach 2
function fib(n){
   if(n<=0){
      return 0
   } else if(n===1){
      return 1
   } else {
      return fib(n-1) + fib(n-2)
   }
}

function printFib(n){
   if(n<=0){
      return 
   } else {
      for(let i = 0; i<=n; i++){
         console.log(fib(i))
      }
   }
}
console.log(printFib(5))