// Akshay Saini
const users = [
    {firstName: 'Prince', lastName: 'Sachan', age: 27},
    {firstName: 'Nawodit', lastName: 'Nayan', age: 25},
    {firstName: 'Sangmesh', lastName: 'V. Reddy', age: 27},
    {firstName: 'Anubhav', lastName: 'Sachan', age: 24}
]

const fullName = users.map(x => x.firstName + ' ' + x.lastName)
console.log('Full Name:', fullName)

const age = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] += acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log('Age:',age)

let orders = [
    {
        "order_id": 1,
        "customer": "Alice",
        "items": [
            {"item_name": "laptop", "quantity": 1, "price_per_item": 1000},
            {"item_name": "mouse", "quantity": 2, "price_per_item": 50},
        ],
        "status": "completed",
    },
    {
        "order_id": 2,
        "customer": "Bob",
        "items": [
            {"item_name": "keyboard", "quantity": 1, "price_per_item": 100},
        ],
        "status": "pending",
    },
    {
        "order_id": 3,
        "customer": "Charlie",
        "items": [
            {"item_name": "monitor", "quantity": 2, "price_per_item": 300},
        ],
        "status": "completed",
    },
]

const completedOrder = orders.filter(x => x.status == "completed");
console.log('Complete Orders:', completedOrder);

const totalPriceOfEachOrder = completedOrder.map((x) => {
    let price = x.items
    return price
})

console.log(totalPriceOfEachOrder)

// const totalRevenue = totalPriceOfEachOrder.reduce((acc, curr) => {
//     acc += curr
// }, 0)

// console.log(totalRevenue)