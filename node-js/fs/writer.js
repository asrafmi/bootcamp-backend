const fs = require('fs')

fs.writeFileSync('./test.json', '{ "haloo" }', {
    encoding: 'utf-8'
})

