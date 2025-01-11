// Class   =     (ES6 feature)  provides a more strucured and cleaner way to 
//               work with objects compared to the traditional constructor
//               function ex. static keyword, encapsualtion, inheritance



class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    displayproduct() {
        console.log(`Product:${this.name}`)
        console.log(`Price:$${this.price}`)
        console.log(`Quantity:${this.quantity}`)
    }

    calcualteTotal(salestax){
        return this.price + (this.price * salestax);
    }
}
const salestax = 0.05;
const product1 = new Product("Shirt", 20, 10);
const product2 = new Product("Pants", 30, 20);
const product3 = new Product("Shoes", 40, 15);

product2.displayproduct();
product1.displayproduct();
product3.displayproduct();

const total = product1.calcualteTotal(salestax);
console.log(`Total price with tax is $${total}`);