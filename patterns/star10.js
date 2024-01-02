let n = 5;
let stars = "";
for(let i = 1; i <= 2*n - 1; i++){
    let row = i
    if(i > n ){
        row = 2*n - i
    }
    for(let j = 1; j <= row; j++){
        stars += "*"
    }
    stars += "\n"
}

console.log(stars)