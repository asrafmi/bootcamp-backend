const fs = require('fs')

fs.writeFileSync('./test.json', '{ "haloo" }', {
    encoding: 'utf-8'
})

let baca = fs.readFileSync('./test.json')
console.log(baca);
console.log(baca.toString('utf-8'));