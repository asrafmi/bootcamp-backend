// conditional while
// let i = 0
// while (i != 101) {
//     console.log("emil cantik");
//     i++
// }

// un-conditional while
let loop = true
let i = 0
while(loop) {
    console.log(i);
    if (Math.ceil((Math.random() * 10)) === 5) {
        loop = false
    }
    i+=1
}

// console.log(Math.ceil(Math.random()));