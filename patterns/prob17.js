let n = 5;
let str = "";
for(let i = 0; i<n;i++){
    for(let j = 0; j<n-i-1;j++){
        str+= " "
    }
    for(let k = 0; k<2*i+1;k++){
        let breakpoint = (2 * i + 1) / 2
        if(k < breakpoint){
            str+= `${String.fromCharCode(65 + k)}`
        } else {
            str+= `${String.fromCharCode(65 + 2 * i - k)}`
        }
    }
    for(let j = 0; j<n-i-1;j++){
        str+= " "
    }
    str+='\n'
}
console.log(str)