const array = [1,2,3,4,5]
const a = ["Ironman","Shaktiman"]

const b = new Array(1,2,3,4) // array in js make shallow copies means pointing directly to reference and a change will be reflected 
//array object have nested prototypes mean proto inside proto


// console.log(array[0])
// console.log(a[1])

// console.log(b)

// const bc = b.join() // <-- convert array to string and save 

// console.log(typeof bc)

console.log("A ",array);

const myn1 = array.slice(1,4) // <-- remove indexes within range excluding last index but does not remove from orgiinal array

console.log(myn1);
console.log(array);

console.log("A ",array);

const myn2 = array.splice(1,4) // <-- it include all indexes in range and remove them from original array

console.log(myn2);
console.log(array);


// array.push(1) <-- add after last element
//array.pop() <-- remove last element
// array.unshift(9) <-- add element on top of array
// array.shift()  <-- remove top element