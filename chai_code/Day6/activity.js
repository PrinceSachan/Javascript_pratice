// act - 1 array creation and access
let arr = [1, 2, 3, 4, 5];
console.log('Array creation: ', arr)

console.log('First element of Array: ', arr[0])
console.log('Last element of Array: ', arr[arr.length - 1])

// act - 2 array methods (basic)
// push add new element at end of the array
arr.push(6)
console.log('Push:', arr);

// pop remove last element of the array
arr.pop()
console.log('Pop:', arr)

// shift remove first element of the array
arr.shift()
console.log('Shift:', arr)

// unshift add new element of the beginning of the array
arr.unshift(1)
console.log('Unshift:', arr)

// act - 3 Array methods (Intermediate)
const double = arr.map(x => x * 2)
console.log('Map:', double)

const even = arr.filter(x => x%2==0)
console.log('Filter:', even)

const sum = arr.reduce((acc, curr) => {
    acc += curr
    return acc
}, 0)
console.log('Reduce:', sum)

// act - 4 Array iteration
for(let i = 0; i < arr.length; i++){
    console.log(i)
}

arr.forEach((item) => console.log('forEach', item))

// act - 5 2d-array
let row = 3;
let col = 3;
let twoDArr = [];
let value = 0;

for(let i = 0; i < row; i++) {
    twoDArr[i] = []
    for(let j = 0; j < col; j++) {
        twoDArr[i][j] = value++
    }
}

console.log('Array2D', twoDArr);

console.log(`Access number four in 2D arr ${twoDArr[1][1]}`)

