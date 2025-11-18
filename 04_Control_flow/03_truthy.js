const userEmail = "h@hitesh.ai";
// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", "false", " ", [], {}, function(){}

const emptyArr = [];
// if(emptyArr.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// nullish coalescing operator (??): null, undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 50;

console.log(val1);

// terniary operator
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("more then 80");




