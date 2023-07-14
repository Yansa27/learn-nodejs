
// // Meminta pengguna memasukkan jari-jari lingkaran
// var jariJari = prompt("Masukkan jari-jari lingkaran:");

// // Menghitung luas lingkaran
// var luas = Math.PI * Math.pow(jariJari, 2);

// // Menampilkan hasil
// console.log("Luas lingkaran dengan jari-jari " + jariJari + " adalah: " + luas);

const args = process.argv.slice(2);

for (let arg of args) {
    console.log(`Selamat datang , ${arg}`);
}