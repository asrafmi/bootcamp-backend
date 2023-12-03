// core module
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const dataPath = './data/stufs.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// ambil data kontak
const loadStufs = () => {
    const file = fs.readFileSync('data/stufs.json', 'utf-8')
    const stufs = JSON.parse(file)
    return stufs
}

// ambil kontak berdasarkan nama
const findStufByName = (nama) => {
    const stufs = loadStufs()
    const stuf = stufs.find((stuf) => stuf.nama === nama)
    return stuf
}

// ambil kontak berdasarkan id
const findStufById = (id) => {
    const stufs = loadStufs()
    const stuf = stufs.find((stuf) => stuf.id === id)
    return stuf
}

// menimpa file json dengan yang baru
const saveStuff = (stufs) => {
    fs.writeFileSync('data/stufs.json', JSON.stringify(stufs))
}

// tambah kontak
const addStuf = (stuf) => {
    console.log("STUFFF",stuf);
    const stufs = loadStufs()
    let uuid = uuidv4() 
    console.log(uuid);
    stuf.id = uuid
    console.log(stuf);
    stufs.push(stuf)
    saveStuff(stufs)
}

// cek duplikasi
const cekDuplikat = (nama) => {
    const stufs = loadStufs()
    return stufs.find((stuf) => stuf.nama === nama)
}

// hapus kontakk menggunakan nama
const deleteStufByName = (nama) => {
    const stufs = loadStufs()
    const newStufs = stufs.filter((stuf) => stuf.nama !== nama)
    saveStuff(newStufs)
}

// hapus kontakk
const deleteStufById = (id) => {
    const stufs = loadStufs()
    const newStufs = stufs.filter((stuf) => stuf.id !== id)
    saveStuff(newStufs)
}

// ubah kontak
const updateStuf = (barangBaru) => {
    const stufs = loadStufs()
    // ngilangin kontak lama yang namanya sama dengan old nama
    const newStufs = stufs.filter((stuf) => stuf.nama !== barangBaru.oldNama)
    delete barangBaru.oldNama
    newStufs.push(barangBaru)
    saveStuff(newStufs)
}

const updateStufById = (barangBaru, id) => {
    let stufs = loadStufs()
    let data = findStufById(id)
    data = {...data, ...barangBaru}
    const index = stufs.findIndex((d => d.id))
    stufs[index] = data
    saveStuff(stufs)
}

module.exports = { loadStufs, findStufByName, findStufById, deleteStufById, deleteStufByName, addStuf, cekDuplikat, updateStuf, updateStufById }