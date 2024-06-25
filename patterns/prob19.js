let count = 5;
let str = ""
for(let i = 0; i<count; i++){
    for(j = 0; j<count-i; j++){
        str += `*`
    }
    for(let k = 0; k <2*i; k++){
        str+=" "
    }
    for(j = 0; j<count-i; j++){
        str += `*`
    }
    str += '\n'
}

for(let i =0; i<count; i++){
    for(j=0; j<=i ;j++){
        str+='*'
    }
    for (let k = 0; k < 2*(count-i-1); k++) {
        str+=' '
        
    }
    for(j=0; j<=i ;j++){
        str+='*'
    }
    str+='\n'
}
console.log(str)