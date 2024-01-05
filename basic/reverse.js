let n = -1234;
let reverse = 0;

function reverseNumber(n) {
    let value = Math.abs(n).toString().split('').reverse().join('')

    if(value > Math.pow(2,31)){
        return 0 
    } else {
        return n > 0 ? value : -value
    }
}

let pat = reverseNumber(n)
console.log(pat)