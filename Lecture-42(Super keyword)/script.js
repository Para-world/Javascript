// Super = keyword is used in classes to call the constructor or 
//         access the properties and methods of a parent (supercalss)
//         this = this object
//         this = the parent


class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
        

    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${this.runspeed}mph`)
    }

}
class Rabbit extends Animal{
    
    constructor(name,age,runspeed){
        super(name,age);
        
        this.runspeed = runspeed;
    }

    run(){
        console.log(`The ${this.name} is running at a speed of ${this.runspeed}`);
        super.move(this.runspeed);
    }

}
class Dog extends Animal{
    constructor(name, age, runspeed){
        super(name,age);
        
        this.runspeed = runspeed;
        
    }
    run(){
        console.log(`The ${this.name} is running at a speed of ${this.runspeed}`);
        super.move(this.runspeed);
    }


}
class Cat extends Animal{
    constructor(name, age, runspeed){
        super(name.age);
        
        this.runspeed = runspeed;
        
    }
    run(){
        console.log(`The ${this.name} is running at a speed of ${this.runspeed}`);
        super.move(this.runspeed);
    }


}
class Cow extends Animal{
    constructor(name, age, runspeed){
        super(name,age);
        
        this.runspeed = runspeed;
        
    }
    run(){
        console.log(`The ${this.name} is running at a speed of ${this.runspeed}`);
        super.move(this.runspeed);
    }


}

const rabbit = new Rabbit('Rabbit', 2, 30);
const dog = new Dog('Dog', 3, 40);
const cat = new Cat('Cat', 1, 20);
const cow = new Cow('Cow', 4, 50);
rabbit.run();
cow.run();

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
