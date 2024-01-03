let rows = 5;
let str = "";

for(let i = 0; i < rows; i++){
    // space
    for(let j = 1; j < rows - i - 1; j++){
        str += "*"
    }

    // character
    let breakPoint = 2 * i + 1 / 2
    for(let j = 1; j < 2 * i + 1; j++){
        if(j > breakPoint){
            str += String.fromCharCode(65 + j)
        } else {
            str += String.fromCharCode(65 + j - 1)
        }
    }

    // space
    for(let j = 1; j < rows - i - 1; j++){
        str += "+"
    }
    str += "\n"
}

console.log(str)