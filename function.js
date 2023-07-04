/* 
TUGAS BESAR
1. MEMBUAT PERHITUNGAN MATEMATIKA 
    -Luas lingkaran 
    -Luas segitiga
    -Luas persegi panjang
2. Menghtung total gaji yang di dapat dalam satu bulan dengan input mnimize:
    -nama karyawan
    -gaji perhari
    -jumlah hari bekerja    
*/
const body = document.body;
//! Tugas nomor 3 
// const luasLingkaran = (jariJari , luas) => {
//     jariJari = prompt('masukkan nilai jari-jari ' , jariJari)

//     luas = Math.PI * Math.pow(jariJari , 2)

//     console.log(`luas lingkaran dengan jari-jari : ${jariJari} adallah : ${luas}`);
// }

//* rumus L = 1/2 x panjangAlas x tinggiSegitiga
// const luasSegitiga = (luas , panjangAlas , tinggiSegitiga) => {
//     panjangAlas = prompt('Masukkan nilai panjang alas segitiga')
//     tinggiSegitiga = prompt('Masukkan nilai tinggi segitiga')
//     luas = 1/2 * panjangAlas * tinggiSegitiga

//     const p = document.createElement('p');
//     p.textContent = `luas segitiga adallah ${luas}`;

//     body.append(p)
// }

// luasSegitiga()

// * rumus luas = panjang * lebar
const luasPersegiPanjang = (luas , panjang , lebar) => {
    lebar = prompt('masukkan nilai lebar')
    panjang = prompt('masukkan nilai panjang')
    
    luas = panjang * lebar

    console.log(`luas persegi panjang adallah : ${luas}`);
}

luasPersegiPanjang();
//! Tugas nomor 2
// const gajiKaryawan = (namaKaryawan , gajiPerhari , jumlahHari) => {
//     namaKaryawan = prompt( "Masukan nama Karyawan", namaKaryawan);
//     gajiPerhari = prompt("Masukan  Gaji perhari" , gajiPerhari);
//     jumlahHari = prompt("Masukan jumlah hari bekerja" , jumlahHari);

//     let totalGaji = gajiPerhari * jumlahHari

//     console.log(`nama Karyawan: ${namaKaryawan} Gaji perbulan: ${totalGaji}`);
// }

// gajiKaryawan()

