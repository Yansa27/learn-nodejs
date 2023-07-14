const  orang = {
    "nama lengkap" : "juliansa",
    alamat : "Indonesia",
    umur : 18
};
//* Mengakses property objects
console.info(`nama : ${orang["nama lengkap"]}`);
console.info(`alamat : ${orang.alamat}`);
console.info(`umur : ${orang.umur}`);

//* Menambah atau Mengubah
// orang["nama"] = "Juliansa";
// orang["alamat"] = "Indonesia";
// orang["umur"] = 18;

console.log(orang);

//* menghapus data
delete orang["umur"]

console.log(orang);


