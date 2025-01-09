
// object = A colleection of realted properties and methods
//          can reperesent real world objects (people, products, places)
//          object = {key: value,
//                    function()}


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isEmployed: true,
    sayhello: function(){console.log(`hi! i am ${firstName} ${lastName}`);},
    eat: function(){console.log('i am eating Halwa');},
};

const person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    isEmployed: false,
    sayhello: function() {console.log(`hi! i am ${firstName} ${lastName}`);},
    eat: () => {console.log('i am eating gajar ka Halwa');},
    
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);



console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person.eat();
person2.eat();
