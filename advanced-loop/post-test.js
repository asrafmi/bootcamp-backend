// for (let i = 0; i < 11; i++) {
//     let str = ''
//     console.log('ini i', i);
//     let x = 5
//     for (let j = 0; j < 11 ; j++) {
//         console.log('ini j', j);
//         if (j == x)  {
//             str += '*'
//         } else {
//             str += '-'
//         }
//     }
//     x+=2
//     console.log('ini x',x);
//     console.log(str);
// }
for (let i = 0; i < 10; i++) {
    let str = ''
    var x = 5
    for (let j = 0; j <= 10 ; j++) {
        str += j == x  ? '*' : '-'
        console.log('ini x 1', x);
        if(j==10){
            x+=2
        }
        console.log('ini x 2', x);
    }
    console.log('ini x 3', x);
    // for (let j = 0; j < 10 ; j++) {
    //     str += '+'
    // }
    console.log(str);
}

// loop pertama


