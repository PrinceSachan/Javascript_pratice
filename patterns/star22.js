let rows = 4;
let str = "";

for(let i = 0; i < 2 * rows - 1; i++){
    for(let j = 0; j < 2 * rows - 1; j++){
        let top = i;
        let bottom = j;
        let right = (2*rows - 2) - j;
        let left = (2*rows - 2) - i;
        let result = (rows - Math.min(Math.min(top, bottom), Math.min(left, right)));
        str += `${result}`
    }
    str += "\n"
}

console.log(str)