// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.

// apporach1 
// function reverseStr(str){
//     let arr = [...str]
//     let newStr = arr.reverse().join("")
//     return (str.toLowerCase() === newStr.toLowerCase()) ? 'Palindrom' : 'Not Palindrom'
// }

// apporach 2
// function reverseStr(str){
//     let p1 = 0
//     let p2 = str.length - 1
//     while(p1<p2){
//         if(str[p1].toLowerCase() === str[p2].toLowerCase()){
//             p1++
//             p2--
//         } else {
//             return 'Not palindrom'
//         }
//     }
//     return 'Plaindrom'
// }

// apporach3
// function reverseStr(str, start, end){
//     if(start < end){
//         if(str[start].toLowerCase() === str[end].toLowerCase()){
//             reverseStr(str, start + 1, end - 1)
//         } else {
//             return 'Not Palindrom'
//         }
//     }
//     return 'Palindrom'
// }

// apporach 4
function reverseStr(str, i){
    if(i <= str.length/2){
        if(str[i].toLowerCase() === str[str.length - i -1].toLowerCase()){
            reverseStr(str, i + 1)
        } else {
            return 'Not Palindrom'
        }
    }
    return 'Palindrom'
}

let str = 'abcdcba'
console.log(reverseStr(str, 0))