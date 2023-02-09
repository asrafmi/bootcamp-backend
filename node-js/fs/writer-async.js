const fs = require('fs')

fs.writeFile('./test.json', '{ "haloo" }', {
    encoding: 'utf-8'
}, function(err) {
    if (err) return console.log(err);
})