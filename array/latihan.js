let me = `asraf pinter bangetttt anjirrrrr wow`

let pisah = me.split(" ")

let a = []
let b = []

for (let i = 0; i < pisah.length; i++) {
    if (pisah[i].length > 5) {
        a.push(pisah[i])
    } else if (pisah[i].length <= 5){
        b.push(pisah[i])
    }
}

console.log(a);
console.log(b);
console.log(a.join(" "));
console.log(b.join(" "));