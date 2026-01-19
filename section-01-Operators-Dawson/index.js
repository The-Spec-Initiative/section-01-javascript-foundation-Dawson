
// 3. Operators
// Goal:
// Understand how to perform calculations and comparisons.
// Key Concepts:
// Arithmetic operators (+, -, *, /)
// Comparison operators (==, ===, !=, >, <)
// Logical operators (&&, ||, !)
// Lab Challenge:
// Build a simple discount checker that applies a 10% discount if a user is above 18 and logged in.

let user = {
    name: "Samuel",
    age : 1,
    loggedIn : true,
    role : "admin"
}

if (user.age > 18 && user.loggedIn){
    console.log("You've a discount of 10%")
}
else{
    console.log("Oh.. we are sorry, you don't qualify")
}