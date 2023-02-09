async function main() {
    // let promise1 = Promise.resolve('1')
    // let promise2 = Promise.resolve('2')
    // let promise3 = Promise.reject('3')
    
    let promises = []
    
    for (let i = 0; i < 100; i++) {
        let p = Promise.resolve(`Angkanya : ${i}`)
        promises.push(p)
    }

    // return all resolved promise
    // let waitPromise = await Promise.all([promise1,promise2,promise3])
    // console.log(waitPromise);    

    // return fastest resolved promise
    // let waitPromiseAny = await Promise.any([promise1,promise2,promise3])
    // console.log(waitPromiseAny);   
    
    // // return all reolved and rejected promise
    // let allSettledPromise = await Promise.allSettled([promise1,promise2,promise3])
    // console.log(allSettledPromise);    
    
    // // return fastest resolved promise
    // let racePromise = await Promise.race([promise1,promise2,promise3])
    // console.log(racePromise);    

    // return all resolved promise
    let waitPromise = await Promise.all(promises)
    console.log(waitPromise); 
    
}

main()