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

showroom.forEach((mobil, i) => {
    console.log(i,mobil.merk);
    console.log(i,mobil.warna);
    console.log(i,mobil.tipe);
    console.log('====');
});