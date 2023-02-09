let nilaiJohn = 70
let nilaiBrett = 80

function masukIPA(nilaiMM) {
    if(nilaiMM > 70) {
        return true
    } else {
        return false
    }
}

console.log(`John masuk IPA = `, masukIPA(nilaiJohn));
console.log(`Brett masuk IPA = `, masukIPA(nilaiBrett));

console.log(`---------------`);

function jurusan(totalNilai) {
    if(totalNilai > 90) {
        console.log(`Jurusan Terbaik`);
    } else if(totalNilai > 80) {
        console.log(`Jurusan Terbaik Kedua`);
    } else if(totalNilai > 70) {
        console.log(`Jurusan Terbaik Ketiga`);
    } else {
        console.log(`tololll`);
    }
}

console.log(`Jurusan dengan nilai 95`);
jurusan(95)

console.log(`Jurusan dengan nilai 71`);
jurusan(71)

console.log(`Jurusan dengan nilai 1`);
jurusan(1)