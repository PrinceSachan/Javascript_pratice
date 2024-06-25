let count = 5;
let str = ""
for(let i = 1; i<=count; i++){
    for(j = 1; j<=i; j++){

        str += `${i}`
    }
    str += '\n'
}
console.log(str)