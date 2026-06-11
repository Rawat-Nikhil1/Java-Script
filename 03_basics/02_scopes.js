// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    
    // console.log("INNER: ", a);
    
}

// console.log(a);
//console.log(b);
//console.log(c);


//+++++++++++++++++ Hoisting ++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)// cannot access before intialization
const addTwo = function(num){
    return num + 2
}
