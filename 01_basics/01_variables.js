const accountId = 14523
let accountEmail = "sudarshan@gmail.com" 
//resolves the problem for scope and 
// prefer not to use var because of issue in
//  block scope and functional scope
var accountPassword = "suddi"
accountCity= "pilibhit"

let accountState;


// accountId = 5 not allowed
console.log(accountId)
accountEmail = "priya@gmail.com"
accountPassword = "sud"

console.log(accountEmail)
console.log(accountPassword)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])