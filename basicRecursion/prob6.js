// Problem Statement: You are given an array. The task is to reverse the array and print it. 

// apporach 1
// function reverseArray(arr){
//     let rever = arr.reverse()
//     return rever
// }

// apporach2
// function reverseArray(arr){
//     let reverArr = []
//     for(let i = 0; i<arr.length; i++){
//         reverArr.unshift(arr[i])
//     }
//     return reverArr
// }

// apporach3
// function reverseArray(arr){
//     let p1 = 0
//     let p2 = arr.length - 1
//     while(p1<p2){
//         let temp = arr[p1]
//         arr[p1] = arr[p2]
//         arr[p2] = temp
//         p1++
//         p2--
//     }
//     return arr
// }

function reverseArray(arr, start, end){
    if(start<end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        reverseArray(arr, start+1, end-1)
    }

    return arr
}
let arr = [0,1,2,3,4]
console.log(reverseArray(arr, 0, arr.length - 1))