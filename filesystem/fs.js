const fs = require('fs')

const readFile = fs.readFileSync('note.txt', 'utf-8');

console.log(readFile);