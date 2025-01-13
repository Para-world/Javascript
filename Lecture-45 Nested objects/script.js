// nested objects =  Objects inside of other objects.
//                   Allows you to represent more complex data structures
//                   child objects is enlcosed by a prent object


//                   Person{Address{}, ContactInfo{}}
//                   ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Para-Lengend",
    age: 14,
    hobbies:["sleeping", "eating", "playing"],
    address:{
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
        },
}

console.log(person.fullName);
console.log(person.age);
console.log(person.address.city);
console.log(person.address.state);

for(const property in person.address){
    console.log(person.address[0]);
}


//Another Example

class Human{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Human("rahul",40,"123 Main St", "Anytown", "USA");

const person2 = new Human("Mohit", 56, "rohini sec 22", "Noida", "India");

const person3 = new Human("Nishant", 56,"begumpur","new delhi", "India");


console.log(person1.address.street);



