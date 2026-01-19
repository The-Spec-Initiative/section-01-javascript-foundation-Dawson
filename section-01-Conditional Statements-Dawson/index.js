// 4. Conditional Statements
// Goal:
// Control decision-making in code.
// Key Concepts:
// if, else if, else
// switch statements
// Truthy and falsy values
// Lab Challenge:
// Create a program that checks a user’s role (admin, user, guest) and displays the appropriate message.
if(user.role === "admin"){
    console.log("Welcome Admin")
}
else if(user.role === "user"){
    console.log("welcome user")
}
else if (user.role === "guest"){
    console.log("welcome guest")
}
else{
    console.log("No role found")
}
