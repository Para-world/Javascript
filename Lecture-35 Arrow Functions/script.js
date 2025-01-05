// arrow functions  =  a concise way to write functions expressions 
//                     good for simple functions that you use only once
//                     (parameters) => {function body}


// const sayHello = () => console.log('Hello');
// sayHello();

// const sayHello = (name) => {console.log(`Hello ${name}`)
//                            console.log(`you are old`)
// };
// sayHello("rahul");

const sayHello = (name,age) => {console.log(`Hello ${name}`)
                           console.log(`you are ${age} years old`)
};
sayHello("rahul",34);


//Another example

// setTimeout(function(){          
//     console.log('Hello');
// }, 3000);

setTimeout(() => console.log('Hello'), 3000);  //arrow function

const numbers = [1,2,3,4,5,6,7,8,9,10];
const square = numbers.map((element) => Math.pow(element,2));
const cube = numbers.map((element) => Math.pow(element,3));
console.log(square);
console.log(cube);
const evennums = numbers.filter((element) => element % 2 === 0);
console.log(evennums);
const oddnums = numbers.filter((element) => element % 2 !== 0);
console.log(oddnums);
const total = numbers.reduce((acc,element) => acc + element);
console.log(total);







