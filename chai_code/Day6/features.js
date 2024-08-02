// feat - 1 Array Manipulation
function arrMani() {
    let arr = new Array;
    arr.push(5, 6, 7);
    arr.pop()
    arr.shift()
    arr.unshift(1, 2, 3, 4, 5)
    return arr
}

console.log(arrMani())

// feat - 2 Array Transformation
const arr = [4, 5, 7, 9, 4]

const output = arr.map(x => x*2).filter(x => x > 10).reduce((acc, curr) => {
    acc += curr
    return acc
}, 0)

console.log('By map method multiply by 2, and filter out element greater than 10 and at the end return total', output)

// feat - 3 Array iteration
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(`For loop ${element}`)
}

arr.forEach((ele) => console.log(`For Each loop ${ele * 2}`))

// feat - 4 2d Array

let row = 3;
let col = 3
let arr2D = []
let value = 0
for(let i = 0; i < row; i++) {
    arr2D[i] = []
    for(let j = 0; j < col; j++) {
        arr2D[i][j] = value++
    }
}

// Template literals convert arrays to a flat string representation.
console.log(`2d Arr creation: ${arr2D}`) //2d Arr creation: 0,1,2,3,4,5,6,7,8

console.log(`2d Arr creation:`, arr2D) // 2d Arr creation: [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]

const result = arr2D.map((item) => item.map((item) => item * 3))
console.log(result)
