const express = require('express')
const router = express.Router()
const cacheCtrl = require('../controller/external')

router.get('/dari-mas-ilham', cacheCtrl.fetchMasIlham)
router.post('/dari-mas-ilham', cacheCtrl.postMasIlham)



module.exports = router