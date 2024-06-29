

const a = "Ashhad"

// console.log(a)

const b = new String("Student")

console.log(`Mera naam ${a} hai or me aik ${b} hun`) // interpolation string method jo kay ab industries me use hota hai

//console.log(b) // key value pairs and return an object 

// console.log(b.toUpperCase()) // big Alphabet

// console.log(b.charAt(2)) // index pe konsa char hai
// console.log(b.length) // length of a stirng

const c = b.substring(0,5) // include only with in the range 

console.log(c)

const d = b.slice(-6,-3)// backward and also accept negative values terminate those in the range and remaining print
console.log(d)
const e = "    BBBBBB      "

console.log(e.trim()) /// exclude any whitespaces and new line from string left to right and there are also trim left and trim right methods


const email = "ashhadabidofc@gmail.com"

console.log(email.includes("@")) // search if given character exists in current string

const url = "www.linkedin.com.ashhad.abid"
console.log(url.split(".")) // split any string into array 

console.log(url.replace(".","/")) // replace searched value with target value only one time