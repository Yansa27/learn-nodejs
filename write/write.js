const fs = require('fs');

const wrritetableStream = fs.createWriteStream('output.txt');
wrritetableStream.write('Ini merupakan teks baris pertama!\n');
wrritetableStream.write('Ini merupakan teks baris kedua!\n');
wrritetableStream.end("Akhir dari writable stream!");