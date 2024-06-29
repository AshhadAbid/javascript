const score = new Number(50000000)


// console.log(score)
// console.log(score.toString().length) // total digits because it convert it in string
// console.log(score.toFixed(1))// how much decimal places want 
console.log(score.toLocaleString('en-PK'))

// console.log(score.toPrecision(4)) // round up decimal places if 456.89 and value given is 4 then answer will be 456.9


console.log(Math.floor((Math.random()*10) + 10)) 