class CustomError extends Error {
    constructor(e) {
        super()
        this.error = e.error
        this.message = e.message
        this.error_details = e.error_details
        this.code = e.code
    }
}

function add(a,b) {
    try {
        const jumlah = 0
        jumlah = a + b        
    } catch (error) {
        console.log(error);
    }
    return jumlah
}

function average(a,b, c) {
    if(c == 0) {
        throw new CustomError({error: 'tidak bisa dibagi dengan nol',
            message: 'errorr',
            error_details: 'detailss',
            code: '500'})
    }
    return add(a,b) / c
}

function evenOrOdd(number) {
    return number % 2 == 0 ? 'even' : 'odd'
}

function main() {
    const x = average(50,50,10)
    console.log(x);
}

try {
    main()
    console.log(evenOrOdd(10))    
} catch (error) {
    // console.log('error dr try catch',error);
    console.log(error.message);
    console.log(error.error);
}

console.log('selesai');