// function freqnent(nums) {
//     let freq = nums.sort((a,b) => a - b);
//     let n = nums.length
//     let i = 0;
//     while(i < n){
//         let first_index = freq.indexOf(freq[i]);
//         let last_index = freq.lastIndexOf(freq[i]);
//         i = last_index

//         // count the frequency
//         let eleFreq = last_index - first_index + 1;
//         console.log(freq[i], eleFreq);
//         i++ 
//     }
// }
// freqnent([1,2,1,1,3,3])

function freqCount(arr) {
    // find the max element in array
    const max = Math.max(...arr)

    // define frequency array
    let freqArr = Array(max + 1).fill(0)

    for(let i = 0; i < arr.length; i++){
        freqArr[arr[i]] += 1
    }
    console.log(freqArr, '\n')

    // for(let j = 0; j<freqArr.length;j++){
    //     console.log(first)
    // }

    // for (let j = 0; j< freqArr.length; j++) {
    //     let value
    //     freqArr[j] = value;
    //     console.log(value)
    // }
}

freqCount([1,2,1,1,3,3])