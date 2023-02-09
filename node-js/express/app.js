const e = require('express')
const express = require('express')
const app = express()
const port = 8000
const helloCtrl = require('./controller/hello')
const mahasiswaCtrl = require('./controller/mahasiswa')

app.get('/', helloCtrl.index)

app.post('/', (r,w,n) => {
    w.send('hello world dari post')
})

app.put('/', (r,w,n) => {
    w.send('hello world dari put')
})

app.delete('/', (r,w,n) => {
    w.send('hello world dari delete')
})

app.get('/mahasiswa', mahasiswaCtrl.fetch)
app.post('/mahasiswa', mahasiswaCtrl.create)
app.get('/mahasiswa/:id/nilai/:nilai', mahasiswaCtrl.get)

app.route('*')
.get((r,w,n) => {
    w.send('halaman gaada bos')
})
.post((r,w,n) => {
    w.send('halaman gaada bos')
})
.put((r,w,n) => {
    w.send('halaman gaada bos')
})
.delete((r,w,n) => {
    w.send('halaman gaada bos')
})

app.get('*', (r,w,n) => {
    w.send('halaman gaada bos')
})

app.listen(port, () => {
    console.log(`aplikasi uda jalan di http://localhost:${port}`);
})