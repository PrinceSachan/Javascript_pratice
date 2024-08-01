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

// feat - 3 