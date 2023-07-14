function satu() {
    console.log('eksekusi pertama')
}
function dua() {
    console.log('function kedua proses......')
    setTimeout(() => {
        console.log('eksekusi kedua')
    } , 3000)
}
function tiga() {
    console.log('eksekusi ketiga')
}

satu()
dua()
tiga()