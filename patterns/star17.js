let rows = 4;
let str = "";

for(let i = 0; i < rows; i++){
    // space
    for(let j = 0; j < 2 - i + 1; j++){
        str += " "
    }

    // character
    for(let j = 0; j < 2 * i + 1; j++){
        let breakPoint = (2 * i + 1) / 2
        if(j < breakPoint){
            str += String.fromCharCode(65 + j)
        }else {
            str += String.fromCharCode(65 + 2 * i - j)
        }
    }

    // space
    for(let j = 0; j < 2 - i + 1; j++){
        str += " "
    }
    str += "\n"
}
console.log(str)