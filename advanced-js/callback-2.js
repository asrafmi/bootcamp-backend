//  contoh 1
function wait(func, x) {
    setTimeout(func, x * 1000);
}

console.log(new Date);
wait(function() {
    console.log('dieksekusi setelah 5 detik', new Date());
}, 5)

//  contoh 2
// function wait(func, x) {
//     setTimeout(func, x * 1000);
// }

// console.log(new Date);
// wait(function() {
//     console.log('dieksekusi setelah 5 detik', new Date());
// }, 5)

