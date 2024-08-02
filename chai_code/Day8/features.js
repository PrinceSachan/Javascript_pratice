// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings. 
let name = 'Prince Sachan'
let age = 27
let profession = 'Software Engineer'

let introduction = `Hello !, My name is ${name} and my age is ${age}. I am a ${profession}`
console.log(introduction)

let bio = `John has been a professional in the tech industry for over a decade.
He started his career as a junior developer and quickly climbed the ranks.
Now, he is a well-respected ${profession}, known for his expertise and dedication.`
console.log(bio)

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them. 
const arr = [10, 11, 12, 13, 14]
const [first, second] = arr;
console.log(`First element of the arr ${first},
Second element of the arr ${second}
`)

const book = {
    title: 'Wings of fire',
    author: 'A P J Abdul Kalam'
}

const {title, author} = book
console.log(`Title of the book: ${title}
Author of the book: ${author}`)

// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments. 
const firstArr = [1, 2, 3, 4, 5]
const secondArr = ['Car', 'Bike', 'Cycle']
const newArr = [...firstArr, ...secondArr]
console.log('Spread operator', newArr)

function addSum(...nums) {
    let total = 0;
    for(let num of nums) {
        total += num
    }
    return total
}

console.log(`Task6: ${addSum(1, 2, 3, 4, 5 ,6, 7, 8, 9, 10)}`);

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments. 
function defaultPara(n1, n2=1) {
    let result = n1 * n2;
    console.log(`Product of ${n1} and ${n2} is ${result}`)
}

defaultPara(3, 4)
defaultPara(2)

// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names. 
let names = 'Kalu'
let ages = 13
let color = 'White'

let bark = function() {
    console.log('Woof, Woof!')
}

let dog = {names, ages, color, bark}
console.log(dog)
dog.bark()

const book_title = 'Title'
const book_author = 'Author'
const book_year = 'Year'

const books = {
    [book_title]: 'Wings of fire',
    [book_author]: 'A P K Abdul Kalam',
    [book_year]: 2022
};

console.log(books)