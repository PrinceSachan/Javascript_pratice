function prefixSumArray(arr) {
    let sum = 0;
    let n = arr.length;
    let prefixSum = []
    
    for(let i = 0; i < n; i++){
        sum = sum + arr[i]
        prefixSum.push(sum)
    }

    return prefixSum;
}

console.log(prefixSumArray([10, 20, 10, 5, 15]))