// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

function Template_literals(name, age) {
    this.name = name
    this.age = age

    console.log(`Name ${name}, Age ${age}`)
}

Template_literals('Prince', 27)

// Task 2: Create a multi-line string using template literals and log it to the console. 
const multiplie_line = function(str) {
    console.log(str)
}

multiplie_line(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
)

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. 

const arr = [10, 11, 12, 13, 14]
const [first, second] = arr;
console.log(`First element of the arr ${first},
Second element of the arr ${second}
`)

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console. 
const book = {
    title: 'Wings of fire',
    author: 'A P J Abdul Kalam'
}

const {title, author} = book
console.log(`Title of the book: ${title}
Author of the book: ${author}`)

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. 
const firstArr = [1, 2, 3, 4, 5]
const newArr = [...firstArr, 6, 7, 8, 9, 10]
console.log('Spread operator', newArr)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result. 
function addSum(...nums) {
    let total = 0;
    for(let num of nums) {
        total += num
    }
    return total
}

console.log(`Task6: ${addSum(1, 2, 3, 4, 5 ,6, 7, 8, 9, 10)}`);

// Activity 4: Default Parameters 
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. 
function defaultPara(n1, n2=1) {
    let result = n1 * n2;
    console.log(`Product of ${n1} and ${n2} is ${result}`)
}

defaultPara(3, 4)
defaultPara(2)

// Activity 5: Enhanced Object Literals 
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let name = 'Kalu'
let age = 13
let color = 'White'

let bark = function() {
    console.log('Woof, Woof!')
}

let dog = {name, age, color, bark}
console.log(dog)
dog.bark()

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const book_title = 'Title'
const book_author = 'Author'
const book_year = 'Year'

const books = {
    [book_title]: 'Wings of fire',
    [book_author]: 'A P K Abdul Kalam',
    [book_year]: 2022
};

console.log(books)