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