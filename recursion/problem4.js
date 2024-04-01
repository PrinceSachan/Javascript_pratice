// Sum of first N Natural Numbers

let count = 0
let n = 5
// while (n >= 1) {
//     count += n;
//     n--
// }
for (let i = 0; i <= n; i++){
    count += i
    // n--
}
// console.log(count)

// parameterized way
function problem4a(i,sum){
    if(i<1){
        console.log(sum)
        return
    } else {
        problem4a(i-1, sum + i)
    }
}

problem4a(5, 0)

// functional way
function problem4b(n){
    if(n==0){
        return 0
    } else {
        return n + problem4b(n-1)
    }
}

console.log(problem4b(6))