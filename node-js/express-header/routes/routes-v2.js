const express = require('express')
const router = express.Router()
const authCtrl = require('../controller/auth')

router.get('/', (r,w) => {
    w.send({ message: 'hello from v2 route'})
})

router.get('/read-header', (r,w) => {
    let headers = r.headers
    let auth = r.header('Authorization')
    console.log(auth);
    w.send({ headers })
})

router.get('/set-header', (r,w) => {
    w.set('Content-Type', 'text/html')
    w.send({ message: 'halooooo' })
})

router.get('/get-custom-header', (r,w) => {
    const apiKey = r.header('x-api-key')
    const billingStatus = r.header('x-billing')
    const noXbillingStatus = r.header('billing')
    if(!apiKey) {
        w.status(403).send({message: "api keyy lu mana bro?"})
    } else {
        w.send({ message: 'halooooo' })
    }
})

router.post('/access-api', (r,w) => {
    w.set('Content-Type', 'text/html')
    w.send({ message: 'halooooo' })
})

router.post('/request-api-key', authCtrl.giveAuthorizeAPIKey)
router.get('/get-api-key', authCtrl.authorizeAPIKey)



module.exports = router