// Static = In JavaScript, the static keyword is used to define properties
//         or methods that belong to the class itself
//         rather than to instances of the class.
//         This means that static properties
//         and methods are accessible directly on the class, 
//         not on instances of the class. 



class Mathutli{
    static PI = 3.14;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }

    
}



console.log(Mathutli.PI);
console.log(Mathutli.getDiameter(90));
console.log(Mathutli.getCircumference(90));
console.log(Mathutli.getArea(90));


//Another Example

class User {

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getusercount(){
        console.log(`There are ${User.userCount} users`);
    }

    sayhello(){
        console.log(`Hello, my name is ${this.username}`);
    }
}

const user1  = new User('Tiger bhai');
const user2 = new User('Rohan bhai');
const user3 = new User('Rahul bhai');


console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayhello();
user2.sayhello();
user3.sayhello();
// console.log(User.userCount);
User.getusercount();