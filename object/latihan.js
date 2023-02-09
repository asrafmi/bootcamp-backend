let data = {
    banDepanKiri : 'R17',
    banDepanKanan : 'R17',
    banBelakangKiri : 'R18',
    banBelakangKanan : 'R18',
    merek : 'ferari',
    mesin : 5000,
    tipe : 'sport',

    setData: function(merek, mesin, tipe) {
        this.merek = merek
        this.mesin = mesin
        this.tipe = tipe
    },

    setMerk: (merk) => {
        this.merk = merk
    }
}

console.log(data.merek);
console.log(data.mesin);
console.log(data.tipe);
console.log(`--------------`);
data.setData('BMW','V8', 7000)
console.log(data.merek);
console.log(data.mesin);
console.log(data.tipe);
console.log(`--------------`);
data.setMerk('Tesla',)
console.log(data.merek);
console.log(data.mesin);
console.log(data.tipe);

// class Mobil {
//     merk = 'BMW'
//     mesin = 5000
//     tipe = 'Sport'

//     constructor(merk) {
//         this.merk = merk
//     }
    
//     setData(merk, mesin, tipe) {
//         this.merk = merk
//         this.mesin = mesin
//         this.tipe = tipe 
//     }
// }

// // '()' buat manggil constructor 

// const mobil = new Mobil()
// mobil.setData('Lambo', 8000, 'Coupe')
// console.log(mobil.merk);
// console.log(mobil.mesin);
// console.log(mobil.tipe);

