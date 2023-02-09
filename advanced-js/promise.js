function tambah(x,y) {
    return new Promise((resolve) => {
        resolve(x + y)
    })
}

tambah(1,2).then(function(hasil) {
    return tambah(hasil, 5)
}).then(function(hasil) {
    return tambah(hasil, 10)
}).then(function(hasil) {
    console.log(hasil)
}).finally(() => {
    console.log('halo aku dr finally');
})

let promise = new Promise( function(resolve, reject) {
    let a = 10    
    let b = 2
    let hasil = a/b

    if(b !== 0) {
        resolve(hasil)
    } else {
        reject("angka tidak bisa dibagi dengan nol")
    }
})

// console.log(promise);

promise.finally(() => {
    console.log('ini dari finally');
}).then( function(data) {
    console.log(data);
}).catch(function(data) {
    console.log(data);
})