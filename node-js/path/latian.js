const path = require('path')
const longPath = 'home/productzilla/bootcamp/path.js'

const direktori = path.dirname(longPath)
const file = path.basename(longPath)
const ext = path.extname(longPath)
const pathUtuh = path.format({
    base: 'basename.js',
    root: '/',
    dir: 'path/bootcamp/nodejs',
})
const a = path.isAbsolute('/home/blablabla/blanla')
const b = path.isAbsolute('./film/blablabla/blanla')
const utuh = path.join('blabla', 'clacla')
const gaKaruan = './/gakaruan//blabla'
const karuan = path.normalize(gaKaruan)
let c = '/home/blabla/clacla'
c = path.join('home', 'blabla','clalcla')
let resolved = path.resolve(c)

console.log("dirname ->", direktori)
console.log("basename ->", file)
console.log("extname ->", ext)
console.log("format ->", pathUtuh)
console.log("isAbsolute ->", a)
console.log("isAbsolute ->", b)
console.log("join ->", utuh);
console.log("normalize -> ", karuan);
console.log("__dirname",__dirname);
console.log("resolve -> ", resolved);