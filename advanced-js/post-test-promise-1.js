function tambah(x,y) {
    return new Promise(resolve => {
        resolve(x + y)
    })
}

function kurang(x,y) {
    return new Promise(resolve => {
        resolve(x - y)
    })
}

function kali(x,y) {
    return new Promise(resolve => {
        resolve(x * y)
    })
}

function bagi(x,y) {
    return new Promise((resolve, reject) => {
        if(y === 0) {
            reject('tidak bisa dibagi dengan 0')
        } else {
            resolve(x / y)
        }
    })
}

function kuadrat(x,y) {
    return new Promise(resolve => {
        resolve(x ** y)
    })
}

tambah(100,5).then(function(hasilTambah) {
    return bagi(hasilTambah, 15)
}).then(function(hasilBagi) {
    return kurang(hasilBagi, 7)
}).then(function(hasilKurang) {
    return tambah(hasilKurang, 50) 
}).then(function(hasilTambah) {
    return bagi(hasilTambah, 4)
}).then(function(hasilBagi) {
    return kali(hasilBagi, 3)
}).then(function(hasilKali) {
    return tambah(hasilKali, 120)
}).then(function(hasilAkhir) {
    console.log(`USING THEN \n 
a) 100 + 5 / 15 - 7 + 50 / 4 * 3 + 120  = ${hasilAkhir}`);
})

kali(130,2).then(function(hasilKali) {
    return bagi(hasilKali, 10)
}).then(function(hasilBagi) {
    return kurang(hasilBagi, 80)
}).then(function(hasilKurang) {
    return tambah(hasilKurang, 5) 
}).then(function(hasilTambah) {
    return tambah(hasilTambah, 50)
}).then(function(hasilTambah) {
    return kurang(hasilTambah, 20)
}).then(function(hasilKurang) {
    return bagi(hasilKurang, 40)
}).then(function(hasilAkhir) {
    console.log(`b) 130 * 2 / 10 - 80 + 5 + 50 - 20 / 40  = ${hasilAkhir}`);
})

// c. 400 / 5 * 4 - 90 + 50 / 2 * 5 * 10

bagi(400,5).then(function(hasilBagi) {
    return kali(hasilBagi, 10)
}).then(function(hasilKali) {
    return kurang(hasilKali, 90)
}).then(function(hasilKurang) {
    return tambah(hasilKurang, 50) 
}).then(function(hasilBagi) {
    return bagi(hasilBagi, 2)
}).then(function(hasilBagi) {
    return kali(hasilBagi, 5)
}).then(function(hasilKali) {
    return bagi(hasilKali, 10)
}).then(function(hasilAkhir) {
    console.log(`c) 400 / 5 * 4 - 90 + 50 / 2 * 5 * 10  = ${hasilAkhir}`);
})