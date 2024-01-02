let rows =5;
let str = "";
function star7(rows){
    for(let i = 0; i < rows; i++){
        // space
        for(let j = 0; j < rows - i - 1; j++){
            str += " "
        }
        // star
        for(let j = 0; j < 2 * i + 1; j++){
            str += "*"
        }
        // space
        for(let j = 0; j < rows - i - 1; j++){
            str += " "
        }
        str += "\n"
    }
    return str
}

console.log(star7(rows))
module.export = star7;