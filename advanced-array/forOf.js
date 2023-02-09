let data = [
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

for (const mobil of data) {
    console.log(mobil.merk);
    console.log(mobil.warna);
    console.log(mobil.tipe);
    console.log('====');
}

// tidak perlu tahu indexnya keberapa