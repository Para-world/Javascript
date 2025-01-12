// destructuring  =   extract values from arrays and objects,
//                    then assign them to variables in a convenient
//                    way 
//                    [] = to perform array destructuring
//                    {} = to perform object destructuring


//-------------------Example 1---------------------
//SWAP THE VALUES OF TWO VARIABLES WITHOUT USING A TEMPORARY VARIABLE


let a = 5;
let b = 10;

[a,b] = [b,a];

console.log(a);
console.log(b);

//-----------------Example 2-------------------
//SWAP 2 ELEMENTs IN AN ARRAY

const colors = ["red", "green", "blue", "yellow", "White"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//----------------Example 3--------------------

const color =["red", "green", "blue", "yellow", "White"];
const [first, second, third, fourth, fifth] = color;

console.log(first);
console.log(second);
console.log(third);


//-------------------Example 4------------------------
// EXTRACT VALUES FROM OBJECTS


const person1 = {
    firstName: "Para",
    lastName: "Garcia",
    age: 25,
    occupation: "Software Engineer"
}

const person2 = {
    firstName: "Lengend",
    lastName: "Singh",
    age: 30,
}


const {firstName, lastName, age, occupation} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(occupation);

//----------------Example 5-----------------

function displayperson({firstName, lastName, age}){
console.log(`name:${name} ${lastName}`);
console.log(`age: ${age}`);
}

const person3 = {
    firstName: "Shiva",
    lastName: "rudra",
    age: 35,
}

displayperson(person3);




