// let myName = "Tilak     ";
// console.log(myName.trueLength);

let myHeros = ["Thor", "Spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpideyPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.tilak = function(){
    console.log("Tilak is present in all objects");
}
// heroPower.tilak();

myHeros.tilak();

Array.prototype.heyTilak = function(){
    console.log("Tilak says hello");
}
myHeros.heyTilak();
// heroPower.heyTilak();

// inheritance
const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "ChaiAurCode     ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength();
"Tilak".trueLength();
"IceTea".trueLength();

