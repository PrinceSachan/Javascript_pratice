let n = 4;
let str = ''

for(let i=0; i < 2*n -1; i++){
    for(let j=0; j<2*n-1; j++){
        let top = i;
        let bottom = (2*n-2)-i;
        let left = j;
        let right = (2*n-2)-j;
        str+= `${n-Math.min(Math.min(top, bottom), Math.min(left, right))}`
    }
    str+='\n'
}

console.log(str)