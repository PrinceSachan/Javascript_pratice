let count = 5;
let str = ""
for(let i = 0; i<count;i++){
    for(let j = 0;j<=i;j++){
        str+= (j%2===0) ? '1' : '0'
    }
    str+='\n'
}
console.log(str)