// this  =  reference to the object that where THIS is used 
//          (the object depends on the immediate context)
//           person.name = this.name


const person1 = {
    name: 'John',
    favfood: 'gajr ka halwa',
    sayhello: function () {
        console.log(`hi i am ${this.name}`); 
    },
    eat: function () {
        console.log(`i am eating ${this.favfood}`); 
    },
};

const person2 = {
    name: 'John wick',
    favfood: 'chole bhture',
    sayhello: function () {
        console.log(`hi i am ${this.name}`);
        },
        eat: function () {
            console.log(`i am eating ${this.favfood}`);
            }
        };

person1.sayhello(); 
person1.eat();  
person2.sayhello();
person2.eat();  
