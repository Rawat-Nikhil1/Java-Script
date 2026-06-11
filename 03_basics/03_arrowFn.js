const user = {
    username: "nikhil",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current context
    }

}

// user.welcomeMessage()
// user.username = "nikk"
// user.welcomeMessage()

// console.log(this); 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  undefined
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);   undefined
// }
// Chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this.username);   // undefined
}
// Chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                // explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return 
// const addTwo = (num1, num2) =>  (num1 + num2)


const addTwo = (num1, num2) => ({username: "nikhil"})


console.log(addTwo(3,4));
