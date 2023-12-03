const express = require('express')
const router = express.Router()
const { loadStufs, cekDuplikat, addStuf, findStufById, deleteStuf, updateStuf, deleteStufById, updateStufById } = require('../controller/atk')
const { loadEmployee, addEmployee, findEmployeeById, deleteEmployeeById, updateEmployeeById, findEmployeeByName, cekDuplikatHari } = require('../controller/employee')


router.get('/', (r,w) => {
    w.send({
        message: "Selamat Datang di API Toko Sumber Jayaaa"
    })
})

router.get('/stuf', (r,w) => {
    const stufs = loadStufs()
    w.set('Cache-Control', `public, max-age= ${60 * 2}`)
    w.send(stufs)
})

// proses tambah data barang
router.post('/stuf', (r,w) => {
        const body = r.body
        addStuf(body)
        w.send(body)
})

// detail barang
router.get('/stuf/:id', (r,w) => {
    const stuf = findStufById(r.params.id)
    w.send(stuf)
})

// hapus barangg
router.delete('/stuf/:id', (r, w) => {
    const stuf = findStufById(r.params.id)

    // if notexists
    if(!stuf){
        w.status(404)
        w.send('<h1>404</h1>')
    } else {
        deleteStufById(r.params.id)
        w.send({message: 'Data barang berhasil dihapus!'})
    }
})

// proses edit barang
router.put('/stuf/:id', (r,w) => {
    updateStufById(r.body, r.params.id)
    const stuf = findStufById(r.params.id)
    w.send(stuf)
})

router.get('/employee', (r,w) => {
    const employee = loadEmployee()
    w.set('Cache-Control', `public, max-age= ${60 * 2}`)
    w.send(employee)
})

// proses tambah data pegawai
router.post('/employee', (r,w) => {
        const body = r.body
        addEmployee(body)
        const duplikat = cekDuplikatHari(r.body.hari) // errorrr
        // if hari nya sama
        if(duplikat) {
            console.log('haloooo');
            w.status(400).send({message: `${r.body.nama} sudah piket di hari ${r.body.hari}, silahkan ganti hari!`})
        } else {
            w.send(body) 
        }
})

// detail pegawai
router.get('/employee/:id', (r,w) => {
    const employee = findEmployeeById(r.params.id)
    w.send(employee)
})

// hapus pegawai
router.delete('/employee/:id', (r, w) => {
    const employee = findEmployeeById(r.params.id)

    // if notexists
    if(!employee){
        w.status(404)
        w.send('<h1>404</h1>')
    } else {
        deleteEmployeeById(r.params.id)
        w.send({message: 'Data pegawai berhasil dihapus!'})
    }
})

// proses edit pegawai
router.put('/employee/:id', (r,w) => {
    updateEmployeeById(r.body, r.params.id)
    const employee = findEmployeeById(r.params.id)
    w.send(employee)
})


module.exports = router