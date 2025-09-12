function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    
}

sayMyName()  // execution of the function
sayMyName  //reference of the function

function addTwoNo(number1, number2){
    // let result=(number1+number2);
    return number1+number2
    
}

addTwoNo(3,4)
addTwoNo(3,"4")
addTwoNo(3,"a")

const result = addTwoNo(4,6)
console.log("Result: ", result);


function loginUserMessege(username = "sam"){
    if(!undefined){
        console.log("please enter the username")
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessege("sudarshan"))
console.log(loginUserMessege())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,500,856));


const user={
    username: "sudarshan",
    age: 25

}
function handleObject(anyobject){
    console.log(`Useename is ${anyobject.username} and age is ${anyobject.age}`)
}

handleObject(user)

const myArray= ["200","400","543","455"]

function arrayvalues(getarray){
    return getarray[2]
}
console.log(arrayvalues(myArray))



function one(){
    const username= "suddi"
    function two(){
        const website="priya"
        console.log(username);
        
    }
    // console.log(website)
    two()
}
one()
