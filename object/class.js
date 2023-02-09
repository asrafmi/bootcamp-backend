
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
    merk
    banDepanKiri
    banDepanKanan
    banBelakangKiri
    banBelakangKanan
    mesin
    tipe
}

let Mobil1 = new Mobil
Mobil1.banBelakangKanan= 'r17'