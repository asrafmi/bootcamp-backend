let loop = true
let i = 0
while(loop) {
    console.log(Math.ceil((Math.random() * 100)))
    if (i == 100) {
        loop = false
    }
    i+=1
}