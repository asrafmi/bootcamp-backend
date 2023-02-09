const fs = require('fs')
let baca = fs.readFileSync('./test.json')
console.log(baca);
console.log(baca.toString('utf-8'));