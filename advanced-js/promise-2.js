const util = require('util')

function pertambah(x, cb) {
    setTimeout(function() {
        let hasil = 0
        for(let i=1; i <= x; i++) {
            hasil = hasil + i
        }
        cb(hasil)
    }, 1)
}

function faktorial(x) {
    setTimeout(function() {
        let hasil = 1
        for(let i=1; i <= x; i++) {
            hasil = hasil * i
        }
        cb(hasil)
    }, 1)
}

// pertambah(3, function(err, hasil) {
//     if(err) {
//         console.log(err);
//     }
//     console.log(hasil);
// })

const promisePertambahan = util.promisify(pertambah)
const promiseFaktorial = util.promisify(faktorial)



promisePertambahan().then(function(hasil) {
    console.log('hasil pertambahan', hasil);
    return hasil
}).then(promiseFaktorial)
.then(function(hasilFaktorial) {
    console.log('hasil faktorial', hasilFaktorial);
    console.log(hasilFaktorial);
}).catch(function(err) {
    console.log('ada error',err);
})