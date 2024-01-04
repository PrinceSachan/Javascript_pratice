let rows = 5;
let str = "";

for(let i = 0; i < rows; i++){
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

console.log(str); console.log(strr)