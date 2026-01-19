
// 6. Arrays 
// Note: We will dive deeper in another phase
// Goal:
//  Store and manipulate lists of data.
// Key Concepts:
// Creating arrays
let newArr = [] // and empy array
// Accessing items
let items = ["Samuel", "Dawson"]
// we access items in an array by using their index and js is a zero index based, it means the first item in an array is zero. so how do we acess Dawson
let dawson = items[1]
console.log(dawson)
// Array methods: push, pop, map, filter
// push method is used for adding items to the array.
// eg. lets add a new name to the items 
items.push("Ama")
console.log(items)

// pop is used to remove an element from the end of an array.
// when we use the pop method on items array is going to remove the last item which the "Ama"
items.pop()
console.log(items)



// Lab Challenge:
//  Create an array of products and filter out only products that are in stock.

let products = [
    {item : "Rice", Size: "50kg", Qty: 50 },
    {item : "Rice", Size: "25kg", Qty: 45 },
    {item : "Rice", Size: "5kg", Qty: 40 },
    {item : "Rice", Size: "2kg", Qty: 10 },
    {item : "Oil", Size: "500ml", Qty: 0 },
]

const newFil = products.filter((item) =>(item.Qty >= 10))
console.log(newFil)