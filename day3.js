// for in

let fruits = ['watermelon' , 'strawberry' , 'apple' , 'manggo'];

let tampung1 = '';
for(let index in fruits) {
    tampung1 += `${index} => ${fruits[index]} \n`
};

console.log(tampung1);

// loop object
const car = {
    merk : 'honda',
    speed : 100,
    id : 300
};
let tampung2 =''
for(let buyCar in car) {
    tampung2 += `${buyCar} => ${car[buyCar]} \n`
}
console.log(tampung2)