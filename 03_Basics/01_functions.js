// console.log("T");
// console.log("I");
// console.log("L");
// console.log("A");
// console.log("K");

function sayMyName(){
console.log("T");
console.log("I");
console.log("L");
console.log("A");
console.log("K");
}
// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}
const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Tilak"));
// console.log(loginUserMessage("Tilak"));

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 300, 500, 2000));

const user = {
    username: "Tilak",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: "Tilak",
    price: 399
})

const myNewArray = [200, 400, 100, 600];

function returnSecoundValue(getArray){
    return getArray[1];
}
// console.log (returnSecoundValue(myNewArray));
console.log((returnSecoundValue([200, 400, 100, 600])));



