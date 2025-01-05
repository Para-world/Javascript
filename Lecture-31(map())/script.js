//.map()  =  accepts a callback and applies that function to each element
// in the array and returns a new array with the updated elements.


const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

console.log(squares);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube (element){
    return Math.pow(element, 3);
}


//Another example

const studnets = ["John", "Jane", "Bob", "Alice", "Mary"];


const upperCaseStudents = studnets.map(uppercase);
function uppercase(element){
    return element.toUpperCase();
}

console.log(upperCaseStudents);

function lowercase(element){
    return element.toLowerCase();
}

const lowerCaseStudents = studnets.map(lowercase);
console.log(lowerCaseStudents);

//Another example

const dates = ["2024-1-10","2025-2-20", "2026-3-30"];

function formatDtes (element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDtes);
console.log(formattedDates);