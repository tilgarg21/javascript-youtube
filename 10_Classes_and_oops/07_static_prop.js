class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}
const tilak = new User("tilak");
// console.log(tilak.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}
const iPhone = new Teacher("iPhone", "iphone@apple.com");
// console.log(iPhone.createId());
iPhone.logMe();

