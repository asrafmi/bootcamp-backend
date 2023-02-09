const crypto = require('crypto')

console.log(crypto.getHashes());

let beforeHash = 'asraf ganteng'

let afterHash1 = crypto.createHash('sha256').update(beforeHash).digest('hex')
let afterHash2 = crypto.createHash('sha256').update(beforeHash).digest('base64')
let afterHash3 = crypto.createHash('sha256').update(beforeHash).digest('base64url')
let afterHash4 = crypto.createHash('sha256').update(beforeHash).digest('binary')
let afterHash5 = crypto.createHash('sha1').update(beforeHash).digest('hex') //160 bit
let afterHash6 = crypto.createHash('md5').update(beforeHash).digest('hex')
let afterHash7 = crypto.createHash('sha512').update(beforeHash).digest('hex')

console.log("sha 256 - hex: ",afterHash1);
console.log("sha 256 - base64: ",afterHash2);
console.log("sha 256 - base64url: ",afterHash3);
console.log("sha 256 - binary: ",afterHash4);
console.log("sha1 - hex: ",afterHash5);
console.log("md5 - hex: ",afterHash6);
console.log("sha512 - hex: ",afterHash7);