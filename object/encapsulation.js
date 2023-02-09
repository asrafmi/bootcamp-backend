class Kendaraan {
    merk;
    kapasitasMesin;
    warna;
    bbm = 0;

    constructor(merk, kapasitasMesin, warna) {
        this.setKapasitasMesin(kapasitasMesin)
        this.setMerk(merk)
        this.setWarna(warna)
    }

    setMerk(merk){
        if(typeof(merk) !== 'string') throw new Error(`Merk harus string tidak boleh ${typeof(merk)}`)
        this.merk = merk
    }

    setKapasitasMesin(kapasitasMesin){
        if(typeof(kapasitasMesin) !== 'number') throw new Error(`kapasitasMesin harus string tidak boleh ${typeof(kapasitasMesin)}`)
        this.kapasitasMesin = kapasitasMesin
    }

    setWarna(warna){
        if(typeof(warna) !== 'string') throw new Error(`warna harus string tidak boleh ${typeof(warna)}`)
        this.warna = warna
    }

    isiBbm(liter) {
        this.bbm = this.bbm = liter
    }

    nyalakanKlakson(){
        console.log('tinnnnnn!!!');
    }
}

const mobil = new Kendaraan('Ferrari', 800, 'biru')
mobil.setMerk('Ferarri')
mobil.setWarna('Ferarri')
mobil.setWarna('Ferarri')
console.log(mobil);
