// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const JsUser = {
    [mySym]: "mykey1",
    name: "Tilak",
    age: 23,
    location: "Alwar",
    email: "tilgarg21@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "tilgarg21@google.com"
// console.log(JsUser.email);
// Object.freeze(JsUser);
JsUser.email = "tilgarg21@yahoo.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




