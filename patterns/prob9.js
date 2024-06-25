let n = 5;
let str = "";
for(let i = 0; i<n;i++){
    for(let j = 0; j<n-i-1;j++){
        str+= " "
    }
    for(let k = 0; k<2*i+1;k++){
        str+="*"
    }
    for(let j = 0; j<n-i-1;j++){
        str+= " "
    }
    str+='\n'
}
for(let i = 0; i<n;i++){
    for(let j = 0; j<i;j++){
        str+= " "
    }
    for(let k = 0; k<2*(n-i)-1;k++){
        str+="*"
    }
    for(let j = 0; j<2*i+1;j++){
        str+= " "
    }
    str+='\n'
}
console.log(str)