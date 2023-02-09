console.log(`CARA PERTAMA`);

let bilanganGanjil = []
let bilanganGenap = []

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        bilanganGenap.push(i)
    } else {
        bilanganGanjil.push(i)
    }
}
console.log(`Bilangan Ganjil : ${bilanganGanjil}`);
console.log(`Bilangan Genap : ${bilanganGenap}`);

console.log(`----------------------------------------`);

console.log(`CARA KEDUA`);

let bilGanjil = ''
let bilGenap = ''

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        bilGenap += i + ', '
    } else {
        bilGanjil += i + ', '
    }
}
console.log(`Bilangan Ganjil : ${bilGanjil}`);
console.log(`Bilangan Genap : ${bilGenap}`);

console.log(`----------------------------------------`);

let me = `asraf pinter bangetttt anjirrrrr wow keren sekali gg gaming`

let pisah = me.split(" ")

let panjangGanjil = []
let panjangGenap = []

for (let i = 0; i < pisah.length; i++) {
    if (pisah[i].length % 2 == 0) {
        panjangGenap.push(pisah[i])
    } else if (pisah[i].length % 2 !== 0){
        panjangGanjil.push(pisah[i])
    }
}

console.log("Kata dengan jumlah huruf ganjil : ", panjangGanjil.join(" "));
console.log("Kata dengan jumlah huruf genap : ", panjangGenap.join(" "));