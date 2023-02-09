// Create upper case function
function upperCase(word) {
    let result = word.toUpperCase()
    console.log("Hasil dari Upper Case adalah =>", result);  
}

// Create lower case function
function lowerCase(word) {
    let result = word.toLowerCase()
    console.log("Hasil dari Lower Case adalah =>", result);  
}

// Create title case function
function titleCase(word) {
    // Split each word
    var result = word.toLowerCase().split(" ");
    for(var i = 0; i< result.length; i++){
        // get the first letter and capitalize it and add the rest letter assign to that word 
        result[i] = result[i][0].toUpperCase() + result[i].slice(1);
        // result[i][0] from 'ProductzillA' would be 'P' 
        // and result[i].slice(1) from 'Productzilla' would be 'roductzilla'
    }

    // Join all the separated words
    console.log("Hasil dari Title Case adalah =>", result.join(" "));
 }

//  Function Call
upperCase("ProductzillA StartuP PendidikaN TerbaiK");
lowerCase("ProductzillA StartuP PendidikaN TerbaiK");
titleCase("ProductzillA StartuP PendidikaN TerbaiK");

// create function hitung deret bilangan
function hitungDeretBilangan(...args) {
    // use reduce() method to increment each element in array
    console.log(args.reduce((a, b) => a + b, 0));
};

hitungDeretBilangan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
hitungDeretBilangan(10, 10, 10, 10, 10);
hitungDeretBilangan(5, 2, 5, 3, 5);