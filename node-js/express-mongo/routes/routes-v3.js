const express = require('express')
const router = express.Router()
const mobilCtrl = require('../controller/mobil')

router.get('/mobil', mobilCtrl.fetch)
router.post('/mobil', mobilCtrl.create)
router.get('/mobil/:id', mobilCtrl.getOne)
router.put('/mobil/:id', mobilCtrl.update)
router.delete('/mobil/:id', mobilCtrl.destroy)

module.exports = router