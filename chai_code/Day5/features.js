// feat - 1 even & odd function
function eAndO(num) {
    return (num%2===0) ? `${num} is even` : `${num} is odd`
}

console.log(eAndO(4))

// feat - 2 square calculation
function sqrt(num) {
    return num ** 2
}

console.log(`Square of given number ${sqrt(6)}`)

// feat - 3 contactination 
const concat = function(str1, str2) {
    // console.log(`${str1.concat(str2)}`)
    let res = str1 + " " + str2
    console.log(res)
}

concat('Prince', 'Sachan')

// feat - 4 arrow function for calculate sum
feat4 = (n1, n2) => {
    return n1 + n2
}

console.log(feat4(4, 4));

// feat - 5 higher order function
function para(num) {
    console.log(`Hello times ${num}`)
}

function task9(n, fun){
    for(let i = 0; i < n; i++) {
        fun(i)
    }
}

task9(5, para)