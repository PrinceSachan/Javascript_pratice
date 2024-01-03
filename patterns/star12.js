let rows = 4;
let str = "";

for(let i = 1; i <= rows; i++){
    // number
    for(let j = 1; j <= i; j++){
        str += j
    }
    // space
    for(j = 1; j <= 2*(rows-i); j++){
        str += " "
    }
    // number 
    for(let j = i; j >= 1; j--){
        str += j
    }
    str += "\n"
}
console.log(str)