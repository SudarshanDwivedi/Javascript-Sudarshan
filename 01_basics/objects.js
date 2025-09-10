// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "suddi",
    "full name": "sudarshan dwiwedi", 
    // we cannot access this full name by using the dot operator thats why second method of accessing is best to use  
    [mySym]: "newkey1",  // to refer the symbol use the square brackets
    age : 23,
    location : "pilibhit",
    email: "dwivedisudarshan@gmail.com",
    isLoggedIn: false,
    LastLogInDays: ["Monday", "Sunday"]
}

console.log(jsuser.email)   // not good practice to access

console.log(jsuser["email"]);
console.log(jsuser["full name"]);

console.log(typeof(jsuser.mySym)); // here we will get the type of mySym as string and to make it symbol->
console.log((jsuser[mySym]));


jsuser.email= "suddi@gmail.com"
// Object.freeze(jsuser)
jsuser.age = 21

console.log(jsuser["email"]);
console.log(jsuser["age"])

console.log(jsuser)

jsuser.greeting = function(){
    console.log(`hello ${this["full name"]} how's you`)
}
console.log(jsuser.greeting())



