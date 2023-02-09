let data = ["Honda","Suzuki","Mitsubshi"]

const cariMobil = data.filter( function(d) {
    return d.includes('i')
})

// console.log(cariMobil);

let bmw =     {
    merk: 'BMW',
    warna: 'Biru',
    tipe: 'Sedan'
}

let bmwHitam =     {
    merk: 'BMW',
    warna: 'hitam',
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

const showroom2 = [bmw, bmwHitam,mercy,lambo]

const cari = showroom2.filter(function(mobil) {
    return mobil.merk.includes('BM') && mobil.warna.includes('ir')
})

console.log(cari);