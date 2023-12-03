const express = require('express')
const app = express()
const port = 8001
const showtime = require('./middleware/showtime')
const greetings = require('./middleware/greetings')
const routesV1 = require('./routes/routes-v1')
const routesV2 = require('./routes/routes-v2')
const errorHandler = require('./middleware/errorHandler')
const authorization = require('./middleware/auth')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieeParser = require('cookie-parser')

app.use(morgan('dev'))

app.use(cookieeParser())

app.use((r,w,n) => {
    console.log(`diakses jam: ${Date.now()}`);
    n()
})

app.use((r,w,n) => {
    console.log(`Haloo dari middleware selanjutnya`);
    console.log(typeof(1));
    n()
})

app.use('/images', express.static('public/images', {
    maxAge: 1000 * 60 * 2
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
// app.use(authorization)
app.use(showtime)
app.use(greetings)



app.use('/api/v1', routesV1)
app.use('/api/v2', routesV2)

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

app.use(errorHandler)

app.listen(port, () => {
    console.log(`aplikasi uda jalan di http://localhost:${port}`);
})