class Barang {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    detail() {
        return this.name + " " + this.price
    }
}

const barang1 = new Barang("Macbook Air", 15000000)
console.log(barang1);

class Mobil {
    merk = 'Tesla'
    banDepanKiri = 17
    banDepanKanan = 17
    banBelakangKiri = 18
    banBelakangKanan = 18
    mesin = 'V8'
    tipe = 'Executive'
    bbm = 0

    constructor(merk, tipe) {
        this.merk = merk
        this.tipe = tipe
        console.log('ini dilakukan pada saat instansiasi');
    }

    nyalakan() {
        console.log('brummmm');
    }

    printMerkDanTipe() {
        console.log(`merk: ,`, this.merk, `kapasitas: `,this.tipe);
    }

    tambahBbm(liter) {
        this.bbm = this.bbm + liter
    }

    getBBM() {
        return this.bbm
    }
}

let mobilFerari = new Mobil('ferari', 5000)
console.log(mobilFerari);