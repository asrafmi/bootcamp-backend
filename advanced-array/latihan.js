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

// console.log(data[0].merk);
// console.log(data[0].warna);
// console.log(data[0].tipe);
// console.log("===============");
// console.log(data[1].merk);
// console.log(data[1].warna);
// console.log(data[1].tipe);

for(let i = 0; i < data.length; i++) {
    // console.log(data[i].merk.length);
    for (let j = 0; j < data.length; j++) {
        // console.log('halo');
        // console.log(j);
        // console.log(data[i].warna[j]);
    }
}

for (let i = 0; i < data.length; i++) {
    const mobil = data[i]
    console.log(mobil.merk);
    console.log(mobil.warna);
    console.log(mobil.tipe);
    console.log('====');
    
}