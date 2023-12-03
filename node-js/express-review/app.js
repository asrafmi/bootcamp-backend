const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const { loadStufs, cekDuplikat, addStuf, findStufByName, deleteStufByName, updateStuf } = require('./controller/atk')
const { body, validationResult, check } = require('express-validator')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const backendRouter = require('./routes/backend')
const { loadEmployee, addEmployee, findEmployeeByName, updateemployee, deleteEmployeeByName, updateEmployee, cekDuplikatHari } = require('./controller/employee')

app.use(morgan('dev'))

// ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cookieParser('secret'))
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

app.use(cors({
    origin:'*',
    methods: ['GET','POST','PUT','DELETE'],
    preflightContinue: false

}))

app.use('/svc', backendRouter)

app.get('/', (r,w) => {
    w.render('index', { layout: 'layout/main-layout', title: 'Toko ATK'})
})

/**
 * STUFFS ENDPOINTS
 */
app.get('/stuf', (r,w) => {
    const stufs = loadStufs()
    w.set('Cache-Control', `public, max-age= ${60 * 2}`)
    w.render('stuf', {
        layout: 'layout/main-layout',
        title: 'Halaman Barang',
        stufs: stufs,
        msg: r.flash('msg')
    })
})

// halaman tambah data barang
app.get('/stuf/add', (r,w) => {
    w.render('add-stuf', {
        title: 'Form Tambah Data Kontak',
        layout:'layout/main-layout'
    })
})

// proses tambah data barang
app.post('/stuf', (r,w) => {
        addStuf(r.body)
        r.flash('msg', 'Data kontak berhasil ditambahkan!')
        w.redirect('/stuf')
})

// halaman detail
app.get('/stuf/:nama', (r,w) => {
    const stuf = findStufByName(r.params.nama)

    w.render('stuf-detail', { 
        layout: 'layout/main-layout', 
        title: 'Halaman detail kontak',
        stuf: stuf,
    })
})

// hapus barangg
app.get('/stuf/delete/:nama', (r, w) => {
    const stuf = findStufByName(r.params.nama)

    // if notexists
    if(!stuf){
        w.status(404)
        w.send('<h1>404</h1>')
    } else {
        deleteStufByName(r.params.nama)
        w.redirect('/stuf')
    }
})

// edit barang
app.get('/stuf/edit/:nama', (r,w) => {
    const stuf = findStufByName(r.params.nama)
    w.render('edit-stuf', {
        title: 'Form Ubah Data Barang',
        layout:'layout/main-layout',
        stuf
    })
})

// proses edit barang
app.post('/stuf/update', (r,w) => {
    updateStuf(r.body)
    w.redirect('/stuf')
})



/**
 * EMPLOYEES ENDPOINTS
 */
 app.get('/employee', (r,w) => {
    const employees = loadEmployee()
    w.set('Cache-Control', `public, max-age= ${60 * 2}`)
    w.render('employee', {
        layout: 'layout/main-layout',
        title: 'Halaman Barang',
        employees: employees,
        msg: r.flash('msg')
    })
})

// halaman tambah data barang
app.get('/employee/add', (r,w) => {
    w.render('add-employee', {
        title: 'Form Tambah Data Pegawai',
        layout:'layout/main-layout'
    })
})

// proses tambah data barang
app.post('/employee', (r,w) => {
        addEmployee(r.body)
        const duplikat = cekDuplikatHari(r.body.hari)
        if(duplikat) {
            r.flash('msg', 'Data pegawai harus diisi dengan hari berbeda!')
            w.redirect('/employee')
        } else {
            r.flash('msg', 'Data pegawai berhasil ditambahkan!')
            w.redirect('/employee')
        }
})

// halaman detail
app.get('/employee/:nama', (r,w) => {
    const employee = findEmployeeByName(r.params.nama)

    w.render('employee-detail', { 
        layout: 'layout/main-layout', 
        title: 'Halaman detail kontak',
        employee: employee,
    })
})

// hapus barangg
app.get('/employee/delete/:nama', (r, w) => {
    const employee = findEmployeeByName(r.params.nama)

    // if notexists
    if(!employee){
        w.status(404)
        w.send('<h1>404</h1>')
    } else {
        deleteEmployeeByName(r.params.nama)
        w.redirect('/employee')
    }
})

// edit barang
app.get('/employee/edit/:nama', (r,w) => {
    const employee = findEmployeeByName(r.params.nama)
    w.render('edit-employee', {
        title: 'Form Ubah Data pegawai',
        layout:'layout/main-layout',
        employee
    })
})

// proses edit barang
app.post('/employee/update', (r,w) => {
    updateEmployee(r.body)
    w.redirect('/employee')
})

app.listen(port, () => {
    console.log(`server amann di http://localhost:${port}`);
})