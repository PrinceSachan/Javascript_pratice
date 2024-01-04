let rows = 5;
let strr = ""

for(let i = 0; i <rows; i++){
    // star
    for(k = 0; k <= i; k++){
        strr += "*"
    }
    // space
    for(k = 0; k < 2* (rows - i - 1); k++){
        strr += " "
    }
    // star
    for(k = 0; k <= i; k++){
        strr += "*"
    }
    strr += "\n"
}

let row = 4
let str = "";

for(let i = 1; i < rows; i++){
    // star
    for(let j = 0; j < rows - i; j++){
        str += "*"
    }
    // space
    for(let j = 0; j < 2 * i; j++){
        str += " "
    }
    // star
    for(let j = 0; j < rows - i; j++){
        str += "*"
    }
    str += "\n"
}

console.log(strr)
console.log(str)