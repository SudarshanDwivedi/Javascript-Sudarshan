const name= "sudarshan"
const repoCount= 50

// console.log(name +  repoCount + "value")

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String("suddi-broski")  //initialization of string method 2

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("s"));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherstring = gameName.slice(0,2)
console.log(anotherstring)

const newstringone= "   sudarshan    "
console.log(newstringone);
console.log(newstringone.trim()); // will remove the extra spaces before and in the end of the string

const url= "https://suddi.com/sudarshan%20dwivedi"

console.log(url.replace('%20', '-'));
console.log(url.includes("dwi"));

const fullname = "sudarshan-dev-dwiwedi"

console.log(fullname.split('-'));

