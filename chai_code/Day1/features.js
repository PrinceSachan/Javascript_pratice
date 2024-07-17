// feature-1 variable types console log
var num = 23;
console.log(typeof num)

var str = "Hello";
console.log(typeof str)

var bool = false;
console.log(typeof bool)

var undef = undefined
console.log(typeof undef)

var big = BigInt(9999999999999999);
console.log(typeof big)

var sym = Symbol(9)
console.log(typeof sym)

// expect number, string, boolean, bigint and symbol all the other data type will show object in "typeof" instance
var noll = null
console.log(typeof noll)

var obj = {
    name: "Prince",
    gender: 'male'
}
console.log(typeof obj)

var arr = [1, 2, 3, 4, 5]
console.log(typeof arr)
// shows if it's array or not and return boolean
console.log(arr instanceof Array)

// Feature - 2 reassignment demo
let varAss = 'I cab be reassigned'
console.log(varAss)

varAss = 'Now, my value has changed'
console.log(varAss)

const varAssi = 'I can not be reassgined'
console.log(varAssi)

// trying to reassigned the const 
try{
    varAssi = "Don't do this me, otherwise I'll throw the error"
} catch(e) {
    console.log("Error: " + e.message)
}