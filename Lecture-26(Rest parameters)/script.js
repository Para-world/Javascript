// rest parameters = (...rest) allow a function to work with a variable
// number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest = condenses separate elements into an array

// Example of rest parameters

function fridge(...items) {
    console.log(items);
}

function getfood(...items) {
    return items;
}

const food1 = 'pizza';
const food2 = 'burger';
const food3 = 'salad';
const food4 = 'ice cream';

fridge(food1, food2, food3, food4);

const items = getfood(food1, food2, food3, food4);
console.log(items);

function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        result += num;
    }
    return result;
}

const total = sum(10, 20, 30, 40, 50);
console.log(`Your total is ${total}`);

function getaverage(...nums) {
    let result = 0;
    for (let num of nums) {
        result += num;
    }
    return result / nums.length;
}

const average = getaverage(10, 20, 30, 40, 50);
console.log(`Your average is ${average}`);

function combinestring(...strings) {
    return strings.join(" ");
}

const fullname = combinestring("Mr.", "Singh", "Rawat", "Chauhan");
console.log(fullname);

