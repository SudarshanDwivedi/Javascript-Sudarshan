const instauser = {}

instauser.id = "1234abc"
instauser.name="suddi"
instauser.isLoggedIn= false
console.log(instauser)


const newuser = {
    email: "suddi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sudarshan",
            lastname: "dwivedi"
        }
    },
    phone: 8532825920

}

console.log(newuser);

const obj1= {1:"a", 2:"b"}
const obj2= {3:"c", 4:"d"}

// const obj3= {obj1,obj2}

// const obj3= Object.assign({}, obj1, obj2)

const obj3= {...obj1, ...obj2}  // spreading objects
console.log(obj3)



