let n = 5;
let str = ""

for(let i = 0; i<n;i++){
    for (let j = 0; j < n; j++) {
        (i == 0 || i == n-1 || j == 0 || j == n-1) ? str+= '*' : str+=' '
    }
    str += '\n'
}

console.log(str)