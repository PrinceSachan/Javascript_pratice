let count = 5;
let str = ""
for(let i = 0; i<count; i++){
    for(j = 0; j<=i; j++){

        str += "*"
    }
    str += '\n'
}
console.log(str)