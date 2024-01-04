let rows = 5;
let str = "";

for(let i = 0; i < rows; i++){
    for(let j = 0; j <= i; j++){
        str += String.fromCharCode(65 + (rows - i - 1) + j)
    }
    str += "\n"
}

console.log(str)