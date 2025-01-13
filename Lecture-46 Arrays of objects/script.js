const fruits = [{name: "apple", color: "red", price: 45},
    {name: "guva", color: "green", price: 100},
    {name: "banana", color: "yellow", price: 20},
    {name: "mango", color: "orange", price: 50},
    {name: "orange", color: "orange", price: 30}
];

fruits.push({name: "coconut", color: "brown", price: 90});

fruits.splice(1,2);
console.log(fruits);


//------------------forEach()------------------
//forEach() is used to execute a function on each element of an array.

fruits.forEach(fruit => console.log(fruit.name));


//--------------------map()----------------------
//map() is used to create a new array with the results of applying a function on every element

const fruitsnames = fruits.map(fruit => fruit.name);
const fruitscolors = fruits.map(fruit => fruit.color);
const fruitprice = fruits.map(fruit => fruit.price);

console.log(fruitsnames);
console.log(fruitscolors);
console.log(fruitprice);

//----------------filter()-----------------
//filter() is used to create a new array with all elements that pass the test implemented by the function

const greenfruits = fruits.filter(fruit => fruit.color === "yellow");

const expensivefruits = fruits.filter(fruit => fruit.price > 50);

console.log(expensivefruits);
console.log(greenfruits);

//------------------reduce-----------------
//reduce() is used to apply a function against an accumulator and each element in the array (from

const maxfruit = fruits.reduce((max, fruit) => fruit.price > max.price ? fruit : max);

console.log(maxfruit);



