let angka = [1,2,3,4,5,6,7,8,9,10]

let a = []

let b = []

for (let i = 1; i <=  angka.length; i++) {
    if(angka[i] > 2 && angka[i] < 7){
        // console.log(angka[i]);
        a.push([i])
    } else if (angka[i] < 2 || angka[i] > 7){
        b.push([i])
    }
}
console.log(a);
console.log(b);