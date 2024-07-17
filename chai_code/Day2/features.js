// arithmetic operation script
function Arithmetic(num1, num2) {
    // properties
    this.num1 = num1;
    this.num2 = num2;

    // methods
    this.add = function (){
        const result = this.num1 + this.num2
        console.log(`Add operation: ${result}`)
    }
    this.subtract = function (){
        const result = this.num1 - this.num2
        console.log(`Subtract operation: ${result}`)
    }
    this.multiply = function (){
        const result = this.num1 * this.num2
        console.log(`Multiply operation: ${result}`)
    }
    this.divide = function (){
        const result = this.num1 / this.num2
        console.log(`Divide operation: ${result}`)
    }
    this.reminder = function (){
        const result = this.num1 % this.num2
        console.log(`Reminder operation: ${result}`)
    }
}

let operation = new Arithmetic(10,2)
operation.add();
operation.subtract();
operation.multiply();
operation.divide();
operation.reminder()

// comparsion and logical script
function Logical(n1, n2){
    this.n1 = n1;
    this.n2 = n2

    this.first = () => {
        if(this.n1 > this.n2 && this.n1 < this.n2) {
            console.log(`1st operation is fullfilled`)
        } else {
            console.log(`1st operation is not fullfilled`)
        }
    }

    this.second = () => {
            if(this.n1 >= 11 || this.n2 <= 6){
            console.log(`2nd operation is fullfilled`)
        }
    }

    this.third = () => {
        if(this.n1 != '10'){
            console.log(`3rd opeation is fullfilled`)
        }
    }
}

const compariosn = new Logical(11,12)
compariosn.first();
compariosn.second();
compariosn.third();

// ternary 
function Ternary(n1){
    this.n1 = n1

    this.ternary = function () {
        (this.n1 > 0) ? console.log(`${this.n1} is positive number`) : console.log(`${this.n1} is negative number`)
    }
}

const tscript = new Ternary(10)
tscript.ternary();