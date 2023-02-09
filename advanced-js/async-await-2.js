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
const promiseFaktorial = util.promisify(faktorial)
const promisePertambahan = util.promisify(pertambah)

async function main() {
    try {
        const hasilTambah = await promisePertambahan(3)
        const hasilFaktorial = await promiseFaktorial(3)
        console.log(hasilFaktorial);
    } catch (error) {
        console.log(error);
    }
}

main()
