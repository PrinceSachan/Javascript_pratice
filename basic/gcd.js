let num1 = 2;
let num2 = 9
let ans;

for(let i = 1; i <= Math.min(num1, num2); i++) {
    if(num1 % i === 0 && num2 % i === 0){
        ans = i;
    }
}

console.log(`The GCD of two number is  ${ans}`)