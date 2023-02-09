class CustomError extends Error {
    constructor(e) {
        super()
        this.error = e.error
        this.message = e.message
        this.error_details = e.error_details
        this.code = e.code
    }
}

function bagi(a,b) {
    try {
        if(b == 0) {
            throw new CustomError({error: 'tidak bisa dibagi dengan nol',
                message: 'errorr',
                error_details: 'detailss',
                code: '500'})
        }
        if(typeof(b) !== 'number') {
            throw new CustomError({error: 'harus berupa angka',
                message: 'errorr',
                error_details: 'detailss',
                code: '500'})
        }
        var hasil = a / b 
    } catch (error) {
        console.log(error.error);
        console.log(error.message);
    }
    return `${a} : ${b} = ${hasil}`
}

function kali(a,b) {
    try {
        if(typeof(b) !== 'number') {
            throw new CustomError({error: 'harus berupa angka',
                message: 'errorr',
                error_details: 'detailss',
                code: '500'})
        }
        var hasil = a * b 
    } catch (error) {
        console.log(error.error);
        console.log(error.message);
    }
    return `${a} x ${b} = ${hasil}`
}

function tambah(a,b) {
    try {
        if(typeof(b) !== 'number') {
            throw new CustomError({error: 'harus berupa angka',
                message: 'errorr',
                error_details: 'detailss',
                code: '500'})
        }
        var hasil = a + b 
    } catch (error) {
        console.log(error.error);
        console.log(error.message);
    }
    return `${a} + ${b} = ${hasil}`
}

function kurang(a,b) {
    try {
        if(typeof(b) !== 'number') {
            throw new CustomError({error: 'harus berupa angka',
                message: 'errorr',
                error_details: 'detailss',
                code: '500'})
        }
        var hasil = a - b 
    } catch (error) {
        console.log(error.error);
        console.log(error.message);
    }
    return `${a} - ${b} = ${hasil}`
}
console.log(bagi(10,2))
console.log('----');
console.log(bagi(10,'d'))
console.log('----');
console.log(kali(5,5))
console.log('----');
console.log(kali(5,'asdfasdf'))
console.log('----');
console.log(kurang(10,2))
console.log('----');
console.log(kurang(10,'d'))
console.log('----');
console.log(tambah(5,5))
console.log('----');
console.log(tambah(5,'asdfasdf'))