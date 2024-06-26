// reverse number
// optimal
function reverseDigit(num){
    let reverseNum = 0
    while(num > 0){
        let lastdigit = num % 10;
        reverseNum = reverseNum*10 + lastdigit
        num = Math.floor(num / 10)
    }
    return reverseNum
}

console.log(reverseDigit(123456))