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

for (const index in data) {
    const mobil = data[index]
    console.log(mobil.merk);
    console.log(mobil.warna);
    console.log(mobil.tipe);
    console.log('====');
}

// perlu tahu indexnya keberapa