const fs = require('fs');

const readFile = fs.readFileSync('./stream/input.txt', 'utf-8')
console.log(readFile);
const writeFile = fs.createWriteStream('output.txt')

writeFile.write(readFile);



