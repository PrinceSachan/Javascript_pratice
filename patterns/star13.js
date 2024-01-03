let rows = 5;
let str = ""
let num = 1
for(let i = 1; i <= rows; i++){
    // num ++
    for(let j = 1; j <= i; j++){
        str += `${num} `
        ++ num
    }
    
    str += "\n"
}

console.log(str)