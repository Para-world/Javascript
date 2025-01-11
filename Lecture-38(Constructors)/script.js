// constructor = special method for defining the properties and methods 
//               of objects


function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () {console.log(`you drive the ${this.color} ${this.year} ${this.make} ${this.model}`) }
}


const car1 = new Car("Mustang", "GT", 2015, "Red");
console.log(car1);

const car2 = new Car("Toyota", "Camry", 2017, "Blue");
console.log(car2);

const car3 = new Car("Honda", "Civic", 2019, "Silver");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();