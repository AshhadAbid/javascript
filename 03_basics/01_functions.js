
const obj = {
    name:"ashhad",
    surname:"abid"
}

function abcd(num1,num2,...cart){
    return cart
    
}


// console.log(abcd(1,2,3,4))

function handleObject(anyObject){

    return anyObject
}

// console.log(handleObject({
//     name:"mmm",
//     abid:"surname"
// }))


// +++++++++++++++++++++++++++HOISTING+++++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(1))// in this type of function declaration we can call function before initialization
function addOne(num1){
    return num1 +1
}

const addTwo = function(num1){
    return num1 + 2
}

console.log(addTwo(5)) // in this type of function declaration we cannot call function before initialization


