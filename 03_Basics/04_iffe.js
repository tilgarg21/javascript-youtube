// Immediately Invoked Function Expressions (IIFE)
(function chai(){ // named IIFE
    console.log("DB connected");
})();
// ()()

((name)=> { // un-named IIFE
    console.log(`DB connected 2 ${name}`);
})("Hitesh");