let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleTimeString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)  // miliseconds
console.log(Math.floor((myTimeStamp)/1000))


let newdate= new Date()

newdate.toLocaleString('default', {
    weekday: "long",
    month: "long"
})

console.log(newdate)