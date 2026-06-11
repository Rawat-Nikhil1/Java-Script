function myName() {
    console.log("Nikhil");
    console.log("Rawat");
}

// myName()

// function addTwoNumbers(a, b) {  // parameters 
//     console.log(a + b);

// }

function addTwoNumbers(a, b) {  
    let result = a+b;
    return result;

}

const res = addTwoNumbers(3, 4) // arguments
// console.log("Result :" , res);

function loginUserMessage(username){
    return `${username} just logged in`
}

const mssg = loginUserMessage("nikhil")
// console.log(mssg);

// if no argument is passed , it takes undefined as a argument



function calculateCartPrice(val1,val2, ...num1){  //... rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

// +++++++++++  How to pass Object in function  ++++++++++++++

const user = {
    username : "nikhil",
    price : 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username : "NIKK",
    price : "400"
})


// +++++++++++  How to pass array in function  ++++++++++++++

const Arr = [200,300,400,500]

function returnSecondValue(anyArray){
    return anyArray[2];
}

console.log(returnSecondValue(Arr));
