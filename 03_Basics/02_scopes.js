// var c = 300;
var a = 100;

if(true){
let a = 10;
const b = 20;
// console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Hitesh";

    function two(){
        const website = "youtube";
        
        console.log(username);   
        console.log(website);
    }
    two();
}
// one();

if(true){
    const username = "Hitesh";
    if(username === "Hitesh"){
        const website = " Youtube";
        // console.log(username + website);
    }
}

// +++++++++++++++ Interesting ++++++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num + 1;
}

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5));