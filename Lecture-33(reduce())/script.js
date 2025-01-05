// .reduce()  =   reduce the elements of an array to a single value



const prices = [3,40,100,56,90,65,32,456,764];
const toal = prices.reduce(sum);
function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}
console.log(toal);

//Another example

const grades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const maxium = grades.reduce(getmax);
console.log(maxium);

function getmax(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}

function getmin(accumulator, currentValue) {
    return Math.min(accumulator, currentValue);
}

const minium = grades.reduce(getmin);
console.log(minium);