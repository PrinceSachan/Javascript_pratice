let num = 79897
let count1 = 0
function countDigit1(num){
    while(num > 1){
        num = parseInt(num) /10
        console.log(num)
        count1 ++
    }
    return count1;
}

countDigit1(num)

function countDigit2(num){
    let str = Math.abs(num).toString();
    let count2 = str.length;

    console.log(`num has total number of ${count2} digit`)
}

countDigit2(num)
console.log(`num has total number of ${count1} digit`)