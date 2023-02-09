// function coba(teks, callback) {
//     setTimeout(function() {
//         str = `hallo saya dari callback: ${teks}`
//         callback(teks)
//     }, 0)
// }

// let promise = new Promise(function(res, rej) {
//     coba('asraf', function(teks) {
//         res(teks)
//     })
// })

// promise.then(function(hasil) {
//     console.log(hasil);
// })

function tambah(x,y) {
    return new Promise((resolve, reject) => {
        resolve(x + y)
    })
}

function kurang(x,y) {
    return new Promise((resolve, reject) => {
        resolve(x - y)
    })
}

function kali(x,y) {
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
        resolve(x ** y)
    })
}

function modulus(x,y) {
    return new Promise((resolve, reject) => {
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

let 