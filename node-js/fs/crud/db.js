const fs = require('fs')

let file = 'data.json'

exports.readAll = function() {
    let data = fs.readFileSync( file, {
        encoding: 'utf-8'
    })
    return JSON.parse(data.toString('utf-8'))   
}

exports.readOne = function(id) {
    const database = exports.readAll()
    return database[id]   
}

exports.create = function(data) {
    // if(!fs.existsSync('..'))
    const database = exports.readAll()
    const dateNow = Date.now()
    database[dateNow] = data
    fs.writeFileSync(file, JSON.stringify(database))   
}

exports.update = function(id, data) {
    const database = exports.readAll()
    if(!database[id]) {
        throw new Error('Data tidak ditemukan!')
    }
    database[id] = data
    fs.writeFileSync(file, JSON.stringify(database), {
        encoding: 'utf-8'
    })   
}

exports.find = function(merk) {
    const database = exports.readAll()
    // if(!database[merk]) {
    //     throw new Error('Data tidak ditemukan!')
    // }
    let tampung = Object.keys(database)
    console.log(tampung);
    // console.log(Object.keys(database));
    var newdata = Object.values(database)((db) => db.merk == merk)
    
    console.log(newdata);
    // fs.writeFileSync(file, JSON.stringify(newdata), {
    //     encoding: 'utf-8'
    // })
} 

exports.delete = function(id) {
    const database = exports.readAll()
    if(!database[id]) {
        throw new Error('Data tidak ditemukan!')
    }

    delete database[id]
    fs.writeFileSync(file, JSON.stringify(database), {
        encoding: 'utf-8'
    })   
}