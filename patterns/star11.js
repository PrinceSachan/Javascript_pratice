let rows = 5;

for(let i = 1; i <= rows; i++) {
    let str = ""
    for(let j = 1; j <= i; j++){
        str += (j%2 ==0) ? '0' : '1'
    }
    console.log(str)
}

// console.log(start)