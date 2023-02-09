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

    nyalakanKlakson(){
        console.log('tinnnnnn!!!');
    }
}

class Mobil extends Kendaraan {
    stir = 'electric'
    bukaJendela(){
        console.log(`buka jendela cuy`);
    }
    nyalakanKlakson(){
        super.nyalakanKlakson()
        console.log('tin tin tinnnnnnn!!!');
    }
}

class Motor extends Kendaraan {
    stang = 'sport'
    boncengan(){
        console.log(`boncengan cuy`);
    }

    nyalakanKlakson(){
        super.nyalakanKlakson()
        console.log('tin tinnnnnn!!!');
    }
}

let mobilFerari = new Mobil('Ferarri', 5000, 'merah')
let motorHarley = new Motor('Harley', 2000, 'hitam')

mobilFerari.nyalakanKlakson()
motorHarley.nyalakanKlakson()
