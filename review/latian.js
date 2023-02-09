/**
 * fungsi u/ menentukan sebuah angka  
 * yang diinputkan adalah ganjil atau genap
 */

// import readline module
const readline = require("readline");

// buat fungsi
function tentukanAngka(angka) {

    // logic
    if(angka % 2 == 0) {
        console.log(`${angka} merupakan angka genap`);
    } else {
        console.log(`${angka} merupakan angka ganjil`);
    }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// tampung angka
// let angka = "";

rl.question("Masukkan angka : ", function (int) {
    angka = int;

  tentukanAngka(angka)

  // close input stream
  rl.close();
});
