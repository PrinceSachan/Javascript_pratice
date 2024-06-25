let count = 4;
let str = ""
for(let i = 1; i<=count; i++){
    for(j = 1; j<=i; j++){
        str += `${j}`
    }
    for(let k = 0; k < 2*(count - i); k++){
        str += ' '
    }
    for(j = i; j>=1; j--){
        str += `${j}`
    }
    str += '\n'
}

console.log(str)