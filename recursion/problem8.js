// Print Fibonacci Series up to Nth term

// apporach 1
function pro(n){
    if(n == 0 || n == 1){
        return 1
    } else if (n > 1){
        return pro(n-1) + pro(n-2)
    }
}

console.log(pro(5))