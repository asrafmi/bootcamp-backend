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

const showroom2 = [bmw,mercy,lambo,bmwHitam]
console.log('sebelum diurutkan');
console.log(showroom2);

const cariMobilAsc = showroom2.sort( function(mobilA, mobilB) {
    return mobilA.merk < mobilB.merk ? -1 : 1
})
console.log('setelah diurutkan secara ascending');
console.log(cariMobilAsc);

const cariMobiDesc = showroom2.sort( function(mobilA, mobilB) {
    return mobilA.merk < mobilB.merk ? 1 : -1
})
console.log('setelah diurutkan secara descending');
console.log(cariMobiDesc);