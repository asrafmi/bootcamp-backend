let showroom = [
    {
        merk: 'BMW',
        warna: 'Biru',
        tipe: 'Sedan'
    },
    {
        merk: 'Mercedes',
        warna: 'Putih',
        tipe: 'SUV'
    },
    {
        merk: 'Lamborghini',
        warna: 'Hitam',
        tipe: 'Sedan'
    }
]

let bmw =     {
    merk: 'BMW',
    warna: 'Biru',
    tipe: 'Sedan'
}

let mercy =    {
    merk: 'Mercedes',
    warna: 'Putih',
    tipe: 'SUV'
}

let lambo =    {
    merk: 'Lamborghini',
    warna: 'Hitam',
    tipe: 'Sedan'
}

const showroom2 = [bmw,mercy,lambo]

let data = ["Honda","Suzuki","Mitsubshi"]

let kapitalisasi = data.map(function(mobil) {
    return { nama: mobil.toUpperCase() }
})

let dekapitalisasi = data.map(function(mobil) {
    return mobil.toLowerCase()
})

console.log(kapitalisasi);
console.log(dekapitalisasi);