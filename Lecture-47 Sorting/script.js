// Sort() = method used to sort elements of an array in place.
//          Sort elements as string in default lexicographical order.
//          lexicographic = (alphabet + numbers + symbols) as strings


let fruits = ["guva", "banana", "graphes", "pineapple", "coconut", "apple"]

fruits.sort();
console.log(fruits);

let random = [5,454,3534,64545, "nine", "four", "%", "+"]
random.sort();
console.log(random);

let numbes = [1,3,5,10,4,67,89,90,45,34,54,24,54,23]

// numbes.sort((a, b) => a-b);

numbes.sort((a, b) => b-a);
console.log(numbes);


// Another Example

const people = [{name: "ravi", age:50, gpa: 3.0},
                {name: "rahul", age:60, gpa: 3.5},
                {name: "sonu", age:80, gpa: 3.8},
                {name: "kartik", age:90, gpa: 3.2},
                {name: "rawat", age:100, gpa: 7.8},
];

// people.sort((a,b) => a.gpa - b.gpa);
people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people);

