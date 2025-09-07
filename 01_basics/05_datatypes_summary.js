// primitive

// 7 types= > String, Number Boolean, null, undefined, Symbol, BigInt

// reference (non-primitive type)

// Array, Objects, Functions

// Javascript is dynamically typed language

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)  // not equal in value due to the datatype symbol
const hero= ["sduui", "ayush"]

let myObj = {
    name: "suddi",
    age: 21,
} //under curly braces all are the objects

// in javascript a function can be treated as a variable

const myFunction = function(){
    console.log("hello");
}
console.log(typeof myFunction)
console.log(typeof myObj)


// datatypes -> typeof datatype

// undefined -> undefined
//Boolean -> boolean
// Null -> Object
// function-> function










//********memory************************

// stack memory(primitive)   heap memory(non primitive)

let myname= "sudarshan dwiwedi"

let anothername= myname
anothername= "priya"

console.log(anothername)
console.log(myname)

// in stack memory the copy of the varibale is given and changes made are done to it are not done to the original

let user1= {
    email: "suddi@gmail.com",
    upi: "8532825920@sbi"
}

// we can see that this object is non primitive datatype and it will have the heap memory and in heap there is no copy made rather the reference of the memory goes and any hanges made to the value will reflect in the original one
let user2 = user1

console.log(user2)

user2.email= "priya@gmail.com" // here we are changing the emaol value of user 2 and if we print the value of user 1 then the changed value will be seen

console.log(user1.email)
console.log(user1)
