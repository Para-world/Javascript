// function declaration  =   define a reusable block of code that
//                           performs a specific task


function greet() {
    console.log('Hello there');
}

// function expression   =  a way to define functions as values
//                           or variables


const speak = function() {
    console.log('Good day!');
}

speak();

setTimeout(speak, 3000);
// setTimeout() function is used to execute a function after a specified time

setTimeout(function(){
    console.log('Hello there again!');
},4000);

const numbers = [1,2,3,4,5];
const squares = numbers.map(function(number){
    return Math.pow(number,2);
})

console.log(squares);

const cube = numbers.map(function(number){
    return Math.pow(number,3);
})

console.log(cube);

const even = numbers.filter(function(number){
    return number % 2 === 0;
});

console.log(even);

const odd = numbers.filter(function(number){
    return number % 2 !== 0;
});

console.log(odd);

const total = numbers.reduce(function(accumulator, number){
    return accumulator + number;
});

console.log(total);