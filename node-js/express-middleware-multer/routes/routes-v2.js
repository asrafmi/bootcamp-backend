const express = require('express')
const routesV1 = express.Router()
const helloCtrl = require('../controller/hello')
const mahasiswaCtrl = require('../controller/mahasiswa')

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
routesV1.get('/mahasiswa/:id/nilai/:nilai', mahasiswaCtrl.get)

module.exports = routesV1