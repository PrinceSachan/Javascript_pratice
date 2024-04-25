// frequent character

// function countChar(str){
//     let strArr = str.split('');
//     let n = strArr.length;
//     let i = 0;
//     while(i<n){
//         let first_index = strArr.indexOf(strArr[i]);
//         let last_index = strArr.lastIndexOf(strArr[i]);
//         i = last_index

//         // count the frequency
//         let eleFreq = last_index - first_index + 1;
//         console.log(strArr[i], eleFreq);
//         i++ 
//     }
// }

// function countChar(str){
//     const numArr = []
//     for(let i = 0; i<str.length; i++){
//         numArr.push(str.charCodeAt(i) - 97)
//     }
//     console.log(numArr.sort((a,b) => a-b))
//     const freqArr = Array(numArr.length).fill(0)
//     console.log(freqArr)
    // for(let j = 0; j < numArr.length; j++){
    //     freqArr[numArr[j]] += 1
    // }
    // console.log(freqArr)
// }
// countChar('hello')

function mostOccurringCharacter(s) {
    // Create an object to store character frequencies
    let charFreq = {};

    // Count the frequency of each character in the string
    for (let char of s) {
        // charFreq[char] = (charFreq[char] || 0) + 1;
        // console.log((charFreq[char] || 0) + 1)
        if (charFreq[char] === undefined) {
            charFreq[char] = 1;
        } else {
            charFreq[char]++;
        }
    }
    console.log(charFreq)

    // Find the character with the highest frequency
    let maxFreq = 0;
    let mostOccurringChar = '';
    for (let char in charFreq) {
        if (charFreq[char] > maxFreq) {
            maxFreq = charFreq[char];
            mostOccurringChar = char;
        }
    }

    return { char: mostOccurringChar, count: maxFreq };
}
mostOccurringCharacter('hello')