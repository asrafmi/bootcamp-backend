// console.log(halo);

const a = 10
const b = 0

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
    if(b == 0) {
        throw new CustomError({
            message: 'angka gabisa dibagi 0',
            error: 'cannot divide by zero',
            error_details: 'detailllll',
            code: 567 })
    }
    return a/b
}

console.log('pembagian');
console.log('hasil pembagian: ', bagi(a,b));
console.log('pembagian selesai');

