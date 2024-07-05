
const mysymbol = Symbol("symb") // declared symbol variable 
const obj = {
    name:"Ashhad",
    "fullname":"buhaha",
    ar:[],
    [mysymbol] : "mykey1" // that is how symbol is caleld into object
}
const a = new Object()

//console.log(a)

//obj.name = "Abid" // firrst method of accessign objcet variables
//Object.freeze(obj) // freezes an object that will not further modify object variables
//obj["fullname"] = "asdad" // second method of accessing object variables


//console.log(obj[mysymbol])

obj.greeting = function(){
    console.log(`Hello my name is ${this.name}`)
} 
obj.greetingTwo = function(){
    console.log(`Hello my name is ${this.fullname}`)
} 

console.log(obj.greeting()) // greeting means function reference is there but fucntion not executed

console.log(obj.greetingTwo())
