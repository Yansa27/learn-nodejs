// const nama = 'Juliansa';
// const cetakNama = (nama) => `Hi nama saya ${nama}`;
// console.log(cetakNama(nama));

// const cetakNama = require('./coba');
// console.log(cetakNama('Juliansa'));

const coba = require('./coba');
const coffeeStock = require('./day2');

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
      console.log("Kopi berhasil dibuat!");
    } else {
      console.log("Biji kopi habis!");
    }
  }
   
makeCoffee("arabica", 80);

console.log(coba.cetakNama('Sandhika'), coba.PI , coba.mahasiswa.cetakMhs() , new coba.Orang());