// sebelum await
async function promisedFunction() {
    return await Promise.resolve('halo saya dari promise resolve')
    /**
     * sama dengan
     * return ner Promise((resolve) {resolve(...)})
     */
}

// setelah await
async function promisedFunction() {
    return 'halo saya dari promise resolve'
}

async function rejectedPromise() {
    return Promise.reject('halo saya dari promise reject')
}

// sebelum await
// const a = promisedFunction().then(function(data) {
//     console.log(data);
// })

async function mainSucces() {
    console.log('hallo');
    const a = await promisedFunction()
    console.log(a);
    console.log('productzila');
}

async function mainFailed() {
    try {
        console.log('hallo');
        const a = await promisedFunction()
        console.log(a);

        const b = await rejectedPromise()
        console.log(b);
        console.log('productzila');
    } catch(error) {
        console.log('Error Promise',error);
    }
}


// main()
mainFailed()

// console.log(a);
