const express = require('express')

const emailCtrl = require('../controllers/email.controller')

const router = express.Router()

router.post('/sendPhishingEmail', emailCtrl.sendPhishingEmail)

module.exports = router