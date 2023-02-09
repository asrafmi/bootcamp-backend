class Kendaraan {
    merk;
    kapasitasMesin;
    warna;
    bbm = 0;

    constructor(merk, kapasitasMesin, warna) {
        this.kapasitasMesin = kapasitasMesin
        this.merk = merk
        this.warna = warna
    }

    isiBbm(liter) {
        this.bbm = this.bbm = liter
    }
}

class Mobil extends Kendaraan {
    stir = 'electric'
    bukaJendela(){
        console.log(`buka jendela cuy`);
    }
}

class Motor extends Kendaraan {
    stang = 'sport'
    boncengan(){
        console.log(`boncengan cuy`);
    }
}

let mobilFerari = new Mobil('Ferarri', 5000, 'merah')
let motorHarley = new Motor('Harley', 2000, 'hitam')

mobilFerari.isiBbm(50)
console.log('mobil ferari',mobilFerari);
console.log(mobilFerari.stir)
console.log(mobilFerari.bukaJendela())


motorHarley.isiBbm(20)
console.log('motor harley',motorHarley);
console.log(motorHarley.stang)
console.log(motorHarley.boncengan())
