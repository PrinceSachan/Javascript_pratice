let count = 5;
let str = ""
for(let i = 0; i<=count; i++){
    for(j = 1; j<=count-i; j++){

        str += `${j}`
    }
    str += '\n'
}
console.log(str)