const express = require('express')
const app = express()
const port = 8008

const router = express.Router()

app.use(router)

router.get('/', function(r,w) {
    w.end('helloooo')
})

app.listen(port, () => {
    console.log(`jalan di http://localhost:${port}`);
})
