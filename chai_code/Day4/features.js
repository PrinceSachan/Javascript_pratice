// feature - 1 number printing script
function task1(num) {
    let count = 1
    for(let i = 1; i <=num; i++){
        console.log(`For loop ${i}`)
    }

    while(count <= num){
        console.log(`While loop ${count}`)
        count++
    }
}

task1(10)

// feature - 2 Multiplication Table script
function task2(num) {
    for (let i = 1; i <= num; i++) {
        let res = 5 * i
        console.log(`5 * ${i} = ${res}`)
    }
}
task2(10)

// feature - 3 Pattern priting script
let num = 5;
let str = "";
for(let i = 0; i<num; i++){
    for(let j = 0; j<=i; j++){
        str+="*"
    }
    str+='\n'
}
console.log(str)

// feature - 4 sum calculation script
function task4(num) {
    let sum = 0
    while(num >= 1){
        sum+=num
        num--
    }
    console.log(sum)
}

task4(10)

// feature - 5 factorial calculation script
function task5(num) {
    let sum = 1
    do{
        sum*=num
        num--
    } while(num>=1)
    console.log(sum)
}
task5(10)