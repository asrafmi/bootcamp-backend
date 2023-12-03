const express = require('express')
const app = express()
const port = 8001
const routesV2 = require('./routes/routes-v2')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.use('/api/v2', routesV2)

app.listen(port, () => {
    console.log(`aplikasi uda jalan di http://localhost:${port}`);
})