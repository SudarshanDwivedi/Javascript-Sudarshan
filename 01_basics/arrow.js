const user= {
    username: "sudarshan dwiwedi",
    age: 22,

    welcome: function() {
        console.log(`${this.username}, welcome to my website`);
        // console.log(this)
    }
}

user.welcome()
user.welcome(user.username="priya shalini")
console.log(this)