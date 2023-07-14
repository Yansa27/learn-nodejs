function nama(msg) {
    try {
        console.log(msg.toUpperCase());
    } catch (error) {
        console.log(error);
        console.log(`tolong masukkan tipe data string pada argument nama()`);
    }
}
// nama(12) //! error
nama('juliansa') //* running 