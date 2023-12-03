const express = require('express')
const routesV1 = express.Router()
const multer = require('multer')
const helloCtrl = require('../controller/hello')
const mahasiswaCtrl = require('../controller/mahasiswa')
const cookieCtrl = require('../controller/cookie')

const multerUpload = multer({ dest: './public/images' })

routesV1.get('/', helloCtrl.index)

routesV1.post('/', (r,w,n) => {
    w.send('hello world dari post')
})

routesV1.put('/', (r,w,n) => {
    w.send('hello world dari put')
})

routesV1.delete('/', (r,w,n) => {
    w.send('hello world dari delete')
})

routesV1.get('/mahasiswa', mahasiswaCtrl.fetch)
routesV1.post('/mahasiswa', mahasiswaCtrl.create)
routesV1.post('/mahasiswa/upload', multerUpload.single('image'),mahasiswaCtrl.upload)

routesV1.get('/cookies-read', cookieCtrl.cookieReader)
routesV1.get('/cookies-send', cookieCtrl.cookieSaver)
routesV1.get('/cookies-read', cookieCtrl.sessionSaver)

routesV1.get('/mahasiswa/:id', mahasiswaCtrl.get)
routesV1.put('/mahasiswa/:id', mahasiswaCtrl.update)
routesV1.delete('/mahasiswa/:id', mahasiswaCtrl.remove)
routesV1.get('/mahasiswa/:id/nilai/:nilai', mahasiswaCtrl.get)

module.exports = routesV1