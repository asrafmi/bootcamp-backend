let data = ["Honda","Suzuki","Mitsubshi"]

const cariMobil = data.find( function(d) {
    return d === 'Honda'
})

// console.log(cariMobil);

const cariKriteriaMobil = data.find( function(d) {
    return d.includes('i')
})

// console.log(cariKriteriaMobil);

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

const cari = showroom2.find(function(d) {
    return d.merk.includes('BM') && d.warna.includes('iru')
})

console.log(cari);