const user = {
    username: "Tilak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    // return this;
}

const userOne = new User("Tilak", 12, true)
const userTwo = new User("ChaiAurCode", 10, false);
console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);

// step-1: when we use new keyword, an empty object is created
// step-2: constructor function is called along with new keyword in which the arguments are packed
// step-3: the arguments are injected inside the this keyword



