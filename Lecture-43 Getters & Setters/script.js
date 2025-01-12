// getter =  special method that makes a property readble
// setter =  special method that makes a property writeale

// validate and modify a value when reading/writing
// a property



class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newwidth){
        if (newwidth > 0) {
            this._width = newwidth;
        }else{
            console.log("width must be greater than 0");
        }
    }
    set height(newheight){
        if (newheight > 0) {
            this._height = newheight;
        }else{
            console.log("height must be greater than 0");
        }
    }
    get width(){
        return `${this._width.toFixed(1)}cm`;
        }
        get height(){
            return `${this._height.toFixed(1)}cm`;
            }

            get area(){
                return `${(this._width * this._height).toFixed(1)}cm^2`;
            }
}


const reactangle = new Rectangle(10, 20);

console.log(reactangle.width);
console.log(reactangle.height);
console.log(reactangle.area);






// Another Example

class Person {

    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newfirstname){
        if(typeof newfirstname === "string" && newfirstname.length > 0){
            this._firstname = newfirstname;
        }else{
            console.log("First name must be a non-empty string");
        }
    }

    set lastname(newlastname){
        if(typeof newlastname === "string" && newlastname.length > 0){
            this._lastname = newlastname;
        }else{
            console.error("last name must be a non-empty string");
        }
    }

    set age (newage){
        if (newage === Number && newage > 0){
            this._age = newage;
        }else{
            console.error("Age should be a positive number");
        }
    }

    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get age(){
        return this._age;
    }
    get fullname(){
        return this._firstname + " " + this._lastname;
    }

}


const person = new Person ("Para", "Lengend", 8);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.fullname);
