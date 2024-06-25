let count = 5;
let str = ""

for(let i = 0; i<count; i++){
    for(j = 0; j<=i; j++){
        str += `${String.fromCharCode(65 + (count - i - 1) + j)}`
    }
    str += '\n'
}
console.log(str)