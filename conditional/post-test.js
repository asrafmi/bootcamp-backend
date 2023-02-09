// import readline module for input cli
const readline = require("readline");

// create function to convert celcius to fahrenheit
function fahrenheit(celcius) {

    // validation if user not input anything
    if(!celcius) {
        console.log("Masukkan angka dengan benar! Silahkan isi lagi!");
    } 
    
    // logic
    suhuFahrenheit = (9/5)*celcius + 32
    console.log(`Hasil Konversi dari ${celcius} Celcius ke Fahrenheit adalah ${suhuFahrenheit} Fahrenheit`)
}

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty celcius degree
let suhuCelcius = "";

// question user to enter fahrenheit degree
rl.question("Masukkan suhu(C) : ", function (int) {
    suhuCelcius = int;

  fahrenheit(suhuCelcius)

  // close input stream
  rl.close();
});
