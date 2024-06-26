// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

function palinNum(num){
    let originalnum = num
    let reverseNum = 0;
    while(num > 0){
        let lastdigit = num % 10;
        reverseNum = reverseNum*10+lastdigit
        num=Math.floor(num/10)
    }
    if(originalnum==reverseNum){
        return `${originalnum} is Palindrom`
    } else {
        return `${originalnum} is not palindrom`
    }
}

console.log(palinNum(122))