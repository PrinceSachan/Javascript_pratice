// act - 1 object creation and access
let books = {
    title: 'Wings of fire',
    author: 'A P J Abdul Kalam',
    year: '2014',

    // get_title_and_year: function() {
    //     return {
    //         title: this.title,
    //         year: this.year
    //     }
    // }
    // printed: function() {
    //     return { 
    //         title: this.title,
    //         author: this.author
    //     }
    // },

    // updateYear: function(year) {
    //     this.year = year
    //     return this.year
    // }
}

console.log('Object', books)
console.log(`Title: ${books.title}, Author: ${books.author}`);

// act - 2 object method
// console.log('printed:', books.printed())
// console.log('Update Year', books.updateYear(1011))

books.getTitleAndString = function () {
    console.log(`Book Title: ${books.title}, Book Author: ${books.author}`)
}
books.getTitleAndString();

books.updateYear = function(year) {
    books.year = year
}
books.updateYear(2024)
console.log(books)

// act - 3 nested object 
let library = {
    name: 'Public library',
    books: [
        {title: 'Atomic Habits', year: '2022'},
        {title: 'Zero to One', year: '2021'},
        {title: 'Wings of fire', year: '2020'},
        {title: 'Ikaegi', year: '2019'},
        {title: 'Think Big', year: '2018'}
    ]
}

console.log('Library Object', library)

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`The name of the library ${library.name}`);

library.books.forEach((item) => {
   console.log('Title of the books', item.title)
})

// act - 4 this keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
books.get_title_and_year = function() {
    return {
        title: this.title,
        year: this.year
    }
}
console.log('Task7', books.get_title_and_year())

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for(let item in books) {
    console.log(`${item}: ${books[item]}`)
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log('Key:', Object.keys(books))
console.log('Values:', Object.values(books))