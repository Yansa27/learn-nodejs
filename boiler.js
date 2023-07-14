// import { mkdir } from 'node:fs';

const fs = require('fs');

fs.mkdir ('projet' , { recursive : true}, (err) => {
    console.log("di dalam callback");
    if (err) throw err; {

    }
});

console.log('setelah fungsi mkdir');