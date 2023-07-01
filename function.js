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
//! Tugas nomor 3 
const luasLingkaran = (jariJari , luas) => {
    jariJari = prompt('masukkan nilai jari-jari ' , jariJari)

    luas = Math.PI * Math.pow(jariJari , 2)

    console.log(`luas lingkaran dengan jari-jari : ${jariJari} adallah : ${luas}`);
}

//! Tugas nomor 2
const gajiKaryawan = (namaKaryawan , gajiPerhari , jumlahHari) => {
    namaKaryawan = prompt( "Masukan nama Karyawan", namaKaryawan);
    gajiPerhari = prompt("Masukan  Gaji perhari" , gajiPerhari);
    jumlahHari = prompt("Masukan jumlah hari bekerja" , jumlahHari);

    let totalGaji = gajiPerhari * jumlahHari

    console.log(`nama Karyawan: ${namaKaryawan} Gaji perbulan: ${totalGaji}`);
}

gajiKaryawan()

