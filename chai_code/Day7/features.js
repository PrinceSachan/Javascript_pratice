// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
let book = {
    title: 'Atomic Habits',
    year: '2019',

    get_title_and_year: function(){
        return {
            title: this.title,
            year: this.year
        }
    }
}

console.log('Book', book.title, book.year, book.get_title_and_year())

// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details. 
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

// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys / Object.values.
for(let item in book) {
    console.log(`${item}: ${book[item]}`)
}

console.log('Key:', Object.keys(book))
console.log('Values:', Object.values(book))