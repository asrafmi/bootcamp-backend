class Mobil {
    merk = 'Tesla'
    banDepanKiri = 17
    banDepanKanan = 17
    banBelakangKiri = 18
    banBelakangKanan = 18
    mesin = 'V8'
    tipe = 'Executive'
    bbm = 0

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

let mobil1 = new Mobil()

mobil1.merk = "BMW"
mobil1.tipe = "M4 Competition"

mobil1.nyalakan()
mobil1.printMerkDanTipe()
console.log(`sebelum ditambah bbm`, mobil1.bbm);
mobil1.tambahBbm(10)
console.log(`sesudah ditambah bbm`, mobil1.bbm);


