const fs = require('fs')
const path = require('path')

const dbMahasiswa = require('../db/mahasiswa/index')
const mahasiswa = [
    {
        id : 1, 
        nama : 'asraf',
        email : 'asraf.muhammad07@gmail.com',
        nilai : 95
    },
    {
        id : 2, 
        nama : 'ahmad',
        email : 'ahmad.muhammad07@gmail.com',
        nilai : 90
    },
    {
        id : 3, 
        nama : 'radhan',
        email : 'radhan.muhammad07@gmail.com',
        nilai : 85
    }
]

function fetch(r,w) {
    const data = dbMahasiswa.fetch()
    w.send(data)
}

function get(r,w) {
    const mhs = r.params.id
    const selectedMhs = dbMahasiswa.getOne(mhs) 
    
    let data = {},
    response = 200

    if(selectedMhs) {
        data = selectedMhs
    } else {
        data = { message : "mahasiswa hilang cuy"}
        response = 404
    }
    w.status(response).send(data)
}

function create(r,w) {
    const body = r.body
    const result = dbMahasiswa.create(body)
    w.send(result)
}

function update(r,w) {
    const mahasiswaID = r.params.id
    const body = r.body
    const result = dbMahasiswa.update(body, mahasiswaID)
    w.send(result)
}

function remove(r,w) {
    const mahasiswaID = r.params.id
    dbMahasiswa.remove(mahasiswaID)
    w.sendStatus(204)
}

function upload(r,w) {
    const nama = r.body.nama
    // const ext = path.extname(r.file.originalName)
    const ext = r.file.mimetype.split('/')[1]
    const uploadedPath = r.file.path

    fs.rename(uploadedPath, path.resolve(__dirname, '../public/images/' + nama + '.' + ext),
    (err) => {
        console.log(err);
    })
    w.send({message:'uploaded cuy'})
}

module.exports = {
    fetch,
    get,
    create,
    update,
    remove,
    upload
}