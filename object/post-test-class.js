class DeretBilangan {
    args
    constructor(...args) {
        this.args = args
    }

    hitungDeretBilangan(...args) {
    console.log(`Hasil penjumlahan deret bilangan ${args} adalah`, args.reduce((a, b) => a + b, 0));
    }

}

class ManipulasiString {
    word
    constructor(word) {
        this.word = word
    }

    upperCase(word) {
        let result = word.toUpperCase()
        console.log("Hasil dari Upper Case adalah =>", result);
    }

    lowerCase(word) {
        let result = word.toLowerCase()
        console.log("Hasil dari Lower Case adalah =>", result);  
    }
    
    titleCase(word) {
        var result = word.toLowerCase().split(" ");
        for(var i = 0; i< result.length; i++){
            result[i] = result[i][0].toUpperCase() + result[i].slice(1);
        }
        console.log("Hasil dari Title Case adalah =>", result.join(" "));
     }

}

a = new DeretBilangan()
a.hitungDeretBilangan(1,2,3,4,5,6)

b = new ManipulasiString()
b.upperCase('ProductzillA StartuP PendidikaN TerbaiK')
b.lowerCase('ProductzillA StartuP PendidikaN TerbaiK')
b.titleCase('ProductzillA StartuP PendidikaN TerbaiK')
