function tambah(a , b, callback) {
    callback(a+b)
}

tambah(1,2, function(callback) {
    console.log(callback);
})

function kurang(a , b, callback) {
    callback(a - b)
}

kurang(1,2, function(callback) {
    console.log(callback);
})

function kali(a , b, callback) {
    callback(a * b)
}

kali(1,2, function(callback) {
    console.log(callback);
})

function bagi(a , b, callback) {
    callback(a / b)
}

bagi(1,2, function(callback) {
    console.log(callback);
})

function pangkat(a , b, callback) {
    callback(a ** b)
}

pangkat(1,2, function(callback) {
    console.log(callback);
})


tambah(10,10, function(hasilJumlah) {
    kurang(hasilJumlah,5, function(hasilKurang) {
        bagi(hasilKurang,3, function(hasilBagi) {
            kali(hasilBagi,2, function(hasilKali) {
                console.log(hasilKali)
            })
        })
    })
})

kali(20,2, function(hasilKali) {
    bagi(hasilKali,8, function(hasilBagi) {
        pangkat(hasilBagi,3, function(hasilPangkat) {
            bagi(hasilPangkat,2, function(hasilKali) {
                console.log(hasilKali)
            })
        })
    })
})


// 32 + 8 * 3 / 10 - 30
tambah(32,8, function(hasilTambah) {
    kali(hasilTambah,3, function(hasilKali) {
        bagi(hasilKali,10, function(hasilBagi) {
            kurang(hasilBagi,30, function(hasilKurang) {
                console.log('jawaban no. 2c');
                console.log(hasilKurang)
            })
        })
    })
})
