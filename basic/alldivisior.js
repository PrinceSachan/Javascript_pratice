// function allDivisor(num) {
//     for(let i = 1; i <=  num; i++){
//         if(num%i == 0){
//             console.log(i)
//         }
//     }
//     console.log("\n")
// }

function allDivisor(num){
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            console.log(i + " ")
            if(i !== num/i){
                console.log(num/i + " ")
            }
        }
    }
    console.log("\n")
}
allDivisor(36)