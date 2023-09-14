
const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();


const makeCoffee = (name) => {
    console.log(`kopi dengan nama :${name} sedang di buat`);
};

const makeBill = (price) => {
    console.log(`Bill sebesar :${price} telah di buat`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
