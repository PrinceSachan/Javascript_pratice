// Problem statement: Given an array, we have found the number of occurrences of each element in the array.

// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10  3
//         15  1
// 	        5  2

// function occurrences(arr) {
//     // highest element of array is 15
//     let hasArr = Array(16).fill(0)
//     const set = new Set

//     for(let i = 0; i < arr.length; i++){
//         hasArr[arr[i]] += 1
//     }
    
//     hasArr.filter((value, key) => {
//         if(value > 0){
//             console.log(key, value)
//         }
//     })
// }

function occurrences(arr) {
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        (count[ele]) ? count[ele] += 1 : count[ele] = 1  
    }
    console.log(count)
}

let arr = [10, 5, 10, 15, 10, 5]
occurrences(arr)