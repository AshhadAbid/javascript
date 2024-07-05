


const tinderUser = {}
//or // const tinderuser = new Object() // singleton object 

tinderUser.id = "21k3429"
tinderUser.name = "Ashhad"

// console.log(tinderUser)

// const regularUser = {
//    email : "ashhadabidofc@gmail.com",

//     fullname :{
//         userFullname :{
//             firstName: "Ashhad",
//             lastName:"Abid"
//         }

//     }
// } 

// console.log(regularUser.fullname?.userFullname.firstName) // ? is use to prevent for if else as this value exist or not at first


const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {
    4:"d",
    5:"e",
    6:"f"
}

// const obj3 = {obj1,obj2} // array problem combine objects of objects
// console.log(obj3)

// const obj3 = Object.assign(obj1,obj2) // obj2 storing in obj1 and returning in obj3
// const obj3 = Object.assign({},obj1,obj2) // first variable is the source in which all objects will be stored better to use this syntax
// console.log(obj3)

// // 1 more syntax like ...array

// const obj4 = {...obj1,...obj2}
// console.log(obj4) // it will be use commonly Spread Operator

// array of objects

const arrayofobj = [ // when ddata comes from databases it is usually in the form ob array of objects
    {
        id:1,
        name:"ashad"
    },
    {
        id:2,
        name:"abid"
    },
    {
        id:3,
        name:"akhtar"
    }
]

console.log(arrayofobj[2].name)


console.log(Object.keys(tinderUser)) // it returns keys of object in array so we can iterate through
console.log(Object.values(tinderUser))// it returns value of object in array so we can iterate through
console.log(tinderUser.hasOwnProperty('id')) // mean it have this property or not

//destructuring object means if we dont want .operator tobe used in code we use destructuring it is used in react navbar etc

const {name:MAME} = tinderUser // successfully destructured

console.log(MAME);


// // JSON in Object format
//    {
// //     "name":"Ashhad"
// //     "id":"21212"
// //   }

// JSON in array format
// // JSON in Object format
//    [
           // {
// //     "name":"Ashhad"
// //     "id":"21212"
            //},

//          {
// //     "name":"Ashhad"
// //     "id":"21212"
            //}

// //  ]

// Java String Object Notation always api responses in json format even in other lang like ruby php etc

