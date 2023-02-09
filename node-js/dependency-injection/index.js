const rumus = require('./lib/perhitungan-module-export')
const rumuss = require('./lib/perhitungan-export')

// using module.export
console.log('Using Module Export');
console.log("1 + 2 = ", rumus.tambah(1,2));
console.log("1 - 2 = ", rumus.kurang(1,2));
console.log("1 * 2 = ", rumus.kali(1,2));
console.log("1 / 2 = ", rumus.bagi(1,2));

console.log('====================');
// using export
console.log('Using Export');
console.log("2 + 3 = ", rumuss.tambah(2,3));
console.log("2 - 3 = ", rumuss.kurang(2,3));
console.log("2 * 3 = ", rumuss.kali(2,3));
console.log("2 / 3 = ", rumuss.bagi(2,3));