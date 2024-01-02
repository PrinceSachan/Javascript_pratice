let rows = 5;
let str = "";
function star8 (rows) {
    for(let i = 0; i < rows; i++){
        // space
        for(let j = 0; j < i; j++){
            str += " "
        }
        // star
        for(let j = 0; j < 2*rows- (2*i+1); j++){
            str += "*"
        }
        // space
        for(let j = 0; j < i; j++){
            str += " "
        }
        str += "\n"
    }
    return str
}

console.log(star8(rows))
module.export = star8;