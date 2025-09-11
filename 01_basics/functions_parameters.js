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