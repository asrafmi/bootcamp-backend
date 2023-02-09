async function tambah(x,y) {
    return x + y
}

async function kurang(x,y) {
    return x - y
}

async function kali(x,y) {
    return x * y
}

async function bagi(x,y) {
    return  x / y
}

async function kuadrat(x,y) {
    return x ** y
}


async function main(){
    console.log('USING ASYNC AWAIT');

    // d. 90 * 5 / 9 ** 2 / 100 - 120 + 75 * 3
    var hasilKali = await kali(90,5)
    var hasilBagi = await bagi(hasilKali,9)
    var hasilKuadrat = await kuadrat(hasilBagi, 2)
    var hasilBagi = await bagi(hasilKuadrat, 100)
    var hasilKurang = await kurang(hasilBagi, 120)
    var hasilTambah = await tambah(hasilKurang, 75)
    var hasilKali = await kali(hasilTambah, 3)
    console.log(`d) 90 * 5 / 9 ** 2 / 100 - 120 + 75 * 3 = ${hasilKali}`);

    // e. 75 * 2 / 50 ** 3 / 9 - 80 + 100 / 5
    var hasilKali = await kali(75,2)
    var hasilBagi = await bagi(hasilKali,50)
    var hasilKuadrat = await kuadrat(hasilBagi, 3)
    var hasilBagi = await bagi(hasilKuadrat, 9)
    var hasilKurang = await kurang(hasilBagi, 80)
    var hasilTambah = await tambah(hasilKurang, 100)
    var hasilBagi = await bagi(hasilTambah, 5)
    console.log(`e) 75 * 2 / 50 ** 3 / 9 - 80 + 100 / 5 = ${hasilBagi}`);

    // f. 200 * 4 / 10 + 2500 - 300 * 2 * 3 / 500 * 4 + 1300
    var hasilKali = await kali(200,4)
    var hasilBagi = await bagi(hasilKali,10)
    var hasilTambah = await tambah(hasilBagi, 2500)
    var hasilKurang = await kurang(hasilTambah, 300)
    var hasilKali = await kali(hasilKurang, 2)
    var hasilKali = await kali(hasilKali, 3)
    var hasilBagi = await bagi(hasilKali, 500)
    var hasilKali = await kali(hasilBagi, 4)
    var hasilTambah = await tambah(hasilKali, 1300)
    console.log(`f) 200 * 4 / 10 + 2500 - 300 * 2 * 3 / 500 * 4 + 1300 = ${hasilTambah}`);

    // g. 200 * 4 / 10 + 12 / 2 * 10 / 12 ** 3 * 5 + 120
    var hasilKali = await kali(200,4)
    var hasilBagi = await bagi(hasilKali,10)
    var hasilTambah = await tambah(hasilBagi, 12)
    var hasilBagi = await bagi(hasilTambah, 2)
    var hasilKali = await kali(hasilBagi, 10)
    var hasilBagi = await bagi(hasilKali, 12)
    var hasilKuadrat = await kuadrat(hasilBagi, 3)
    var hasilKali = await kali(hasilKuadrat, 5)
    var hasilTambah = await tambah(hasilKali, 120)
    console.log(`g) 200 * 4 / 10 + 12 / 2 * 10 / 12 ** 3 * 5 + 120 = ${hasilTambah}`);
}

main()