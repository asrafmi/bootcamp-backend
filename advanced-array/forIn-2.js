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
        tipe: 'Sedan',
        mesin: '500c'
    }
]

for (const index in data) {
    const mobil = data[index]
    console.log(mobil);
    console.log(index);
    for( const indexMobil in mobil){
        console.log(`${indexMobil} :`, mobil[indexMobil]);
    }
    console.log('====');
}

// perlu tahu indexnya keberapa