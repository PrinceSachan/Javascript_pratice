function prime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return false
        } else {
            return true
        }
    }
}

let n = 36
let ans = prime(n);
if(n !== 1 && ans === true){
    console.log(n + " is prime number")
} else {
    console.log(n + " is not prime number")
}