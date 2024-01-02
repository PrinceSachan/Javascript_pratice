const n = 5;
let num = 0;
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        num += i
    }
    num += "\n"
}

console.log(num)