let num = -121

function pallindrom(x) {
    let reverse = Math.abs(x).toString().split('').reverse().join('')

    return (x == reverse) ? true : false
}

console.log(pallindrom(num))