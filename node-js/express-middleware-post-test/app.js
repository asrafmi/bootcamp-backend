const express = require('express')
const app = express()
const http = require('http')
const fs = require('fs')
const { send } = require('process')
const expressLayouts = require('express-ejs-layouts')
const morgan= require('morgan')
const port = 8000


// ejs
app.set('view engine', 'ejs')

app.use(expressLayouts)

// logger for each each request
app.use(morgan('dev'))

// built in middleware
app.use(express.static('public'))

// app middleware
app.use((req,res,next)=>{
    console.log('time: ' , Date.now());
    next()
})

// app.use((req,res,next)=>{
//     console.log('ini middleware ke 2 ');
//     next()
// })


app.get('/', (req, res) => {

    const mahasiswa = [
        {
            nama : 'asraf',
            email : 'asraf.muhammad07@gmail.com',
        },
        {
            nama : 'ahmad',
            email : 'ahmad.muhammad07@gmail.com',
        },
        {
            nama : 'radhan',
            email : 'radhan.muhammad07@gmail.com',
        }
    ]

    res.render('index', { layout: 'layouts/main-layout', nama: 'srafff', title: 'Latian Node JS', mahasiswa })
})

app.get('/about', (req,res) => {
    res.render('about', {layout: 'layouts/main-layout',title: 'ini halaman about'})
})

app.get('/contact', (req,res) => {
    res.render('contact', {layout: 'layouts/main-layout', title: 'ini halaman contact'})
})

app.get('/product/:id/category/:idCat', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`)
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.cat}`)
})

app.listen(port, () => {
    console.log('server amann di 8000');
})
app.use('/', (req, res) => {
    res.status(404)
    res.send('gaada halamannya cuyy')
})
