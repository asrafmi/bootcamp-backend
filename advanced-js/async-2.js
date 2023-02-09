function pertambah(x, cb) {
    setTimeout(function() {
        let hasil = 1
        for(let i=1; i <= x; i++) {
            hasil = hasil + i
        }
        cb(hasil)
    }, 1)
}

function faktorial(x) {
    let hasil = 1
    for(let i=1; i <= x; i++) {
        hasil = hasil * i
    }
    return hasil
}

pertambah(1000000000, function(hasil) {
    console.log(`hasil tambah : ${hasil}`);
});
console.log(`hasil faktorial `,faktorial(10));
// ==================================================

function pertambah(x, cb) {
    setTimeout(function() {
        let hasil = 1
        for(let i=1; i <= x; i++) {
            hasil = hasil + i
        }
        cb(hasil)
    }, 1)
}

function faktorial(x) {
    let hasil = 1
    for(let i=1; i <= x; i++) {
        hasil = hasil * i
    }
    return hasil
}

pertambah(1000000000, function(hasil) {
    console.log(`hasil tambah : ${hasil}`);
});
console.log(`hasil faktorial `,faktorial(10));