for(let i=1;i < 21;i++) {
    let hasilGanjilGenap = i % 2 === 0 ? 'bilangan genap' : 'bilangan ganjil';
    let hasilKelipatanTujuh = i % 7 === 0 ? true : false
    console.log(`Angka ${i} adalah bilangan ${hasilGanjilGenap} dan ${hasilKelipatanTujuh} untuk kelipatan 7`);
}

console.log('====================================================================');

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'fizzbuzz');
    } else if (i % 5 === 0) {
        console.log(i, 'buzz');
    } else if (i % 3 === 0 ) {
        console.log(i, 'fizz');
    } else {
        console.log(i);
    }
}

console.log('====================================================================');

for(let i = 1; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0 ? console.log(i, 'fizzbuzz')
    : i % 5 === 0 ? console.log(i, 'buzz')
    : i % 3 === 0 ? console.log(i, 'fizz')
    : console.log(i)
}