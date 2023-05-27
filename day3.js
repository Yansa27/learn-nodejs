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

//  object blue print

function handPhone (brand,color,ram,prosesor) {
    this.brand = brand;
    this.color = color;
    this.ram = ram;
    this.prosesor = prosesor
};


handPhone.prototype.sell = function() {
    console.log(`handphone dengan jenis ${this.brand} warna ${this.color} ram ${this.ram} prosesor ${this.prosesor}`)
}

handPhone.prototype.buyIng = function() {
    console.log(`handphone ${this.brand} ram ${this.ram} warna ${this.color} ${this.prosesor} telah berhasil di beli!`);
}

const opo = new handPhone('oppo','red','8gb','MTK');
const realme = new handPhone('realme','blue','12gb','helio');

console.log(opo);
console.log(realme);

opo.sell();
opo.buyIng();
realme.sell();
realme.buyIng();

