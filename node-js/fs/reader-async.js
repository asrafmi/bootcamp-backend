const fs = require('fs')
fs.readFile('./test.json', function(err,data) {
    if (err) return console.log(err)
    console.log(data);
    console.log(data.toString('utf-8'));
})