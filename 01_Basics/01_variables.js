const accountId = 144553;
let accountEmail = "tilgarg21@gmail.com";
var accountPassword = "123456";
accountCity = "Alwar";
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2; // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Jaipur";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);