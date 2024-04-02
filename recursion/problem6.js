// Reverse a given Array

let arr = [5,4,3,2,1]

let reverArr = arr.reverse()
console.log(reverArr)

let sortArr = arr.sort(function(a, b) {return a - b})
console.log(sortArr)


// swapping the value of arr
function customRever(arr1) {

    let leftIndex = 0;
    let rightIndex = arr1.length - 1;

    while(leftIndex < rightIndex) {

        // swap the element using temp
        let temp = arr1[leftIndex]
        arr1[leftIndex] = arr1[rightIndex]
        arr1[rightIndex] = temp;

        // move the indicies to middle
        leftIndex++;
        rightIndex--;
    }
}


let myArr = [40, 30, 20, 10]
console.log(myArr)
customRever(myArr)
console.log(myArr)

// using recursion

function customRev(arr2, start, end) {
    if(start < end){
        let temp = arr2[start]
        arr2[start] = arr2[end]
        arr2[end] = temp
        customRev(arr2, start + 1, end - 1)
    }
}

let n = 5
let myArr2 = [10, 9, 8, 7, 6];
customRev(myArr2, 0, 4)
console.log(myArr2)