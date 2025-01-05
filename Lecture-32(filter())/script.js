// .filter()  =  creates a new array by filtering out 
//               elements


let numbers = [1,45,32,22,2,34,32,43,45,76,67,54,322,345,22]

function iseven(elements){
    return elements % 2 == 0
}

const evenNumbers = numbers.filter(iseven)

console.log(evenNumbers);

function isodd(elements){
    return elements % 2 !== 0
}

const odd = numbers.filter(isodd);
console.log(odd);

//Another example

const ages = [15,34,18,20,19]

function isAdult(elements){
    return elements >=18
}

const adult = ages.filter(isAdult);
console.log(adult);

function child(elements){
    return elements < 18;
}

const ischild = ages.filter(child);
console.log(ischild);

// Another example

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getshortword(elements){
    return elements.length <= 6;
}

const shortwords = words.filter(getshortword);
console.log(shortwords);

function longwords(elements){
    return elements.length > 6;
}

const islongwords = words.filter(longwords);
console.log(islongwords);
