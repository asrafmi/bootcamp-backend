function fungsiAsync(teks, callback) {
    setTimeout(() => {
        callback(`halo saya dari ${teks}`)
    }, 0)
}

console.log(`hello world`);

fungsiAsync('productzilla', function(teks) {
    console.log(teks);
})

function fungsiAsync2(teks, callback) {
    setTimeout(() => {
        callback(`halo saya dari ${teks}`)
    }, 0)
}

function asyncUppercase(str, callback, callbackError) {
    if(str.length > 10) {
        callbackError('Error di proses uppercase!')
    } else {
        callback(str.toUpperCase())
    }
}

function asyncLowercase(str, callback, callbackError) {
    if(str.length > 8) {
        callbackError('Error di proses lowercase!')
    } else {
        callback(str.toLowerCase())
    }
}

fungsiAsync('asraf 12', function (teksOutput) {
    asyncUppercase(teksOutput, function (uppercasedText) {
        asyncLowercase(uppercasedText, function (lowercasedText) {
            console.log('ini callback hell',lowercasedText);
        }, function(err) {
            console.log('ada error', err);
        })
    }, function(err) {
        console.log('ada error2', err);
    })
}, function(err) {
    console.log('ada error3', err);
})

// console.log(`hello world`);

// fungsiAsync('productzilla', function(teks) {
//     console.log(teks);
// })