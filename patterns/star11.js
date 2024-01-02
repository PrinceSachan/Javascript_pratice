let n = 5;
let start = 1
for(let i = 0; i < n; i++){
    if(i%2 == 0){
        start = start - 1
    }
    for(let j = 0; j<= i; j++){
        start += start
    }
    start = "\n"
}

console.log(start)