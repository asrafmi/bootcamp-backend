const db = require('./db.js')

// db.create({
//     merk : 'ferari',
//     tipe : 'coupe',
//     warna : 'merah',
//     mesin : 1000
// })

// membaca semua data
// console.log(db.readAll());

// membaca satu data
// console.log(db.readOne(1674826108965));

// memperbarui data
// db.update('1674827631683', {
//     merk : 'bmw',
//     tipe : 'm4',
//     warna : 'biru',
//     mesin : 1000
// })

// menghapus satu data
// console.log(db.delete('1674827643101'));

// mencari data spesifik
console.log(db.find('bmw'));