let rows = 5;
let count = 1
let str = ""

for(let i = 0; i < rows; i++){
    for(let j = 0; j <= i; j++){
        str += `${count} `
        ++count
    }
    str+='\n'
}

console.log(str)