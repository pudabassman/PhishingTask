const express = require('express')

const authCtrl = require('../controllers/auth.controller')

const router = express.Router()

router.get('/signin', authCtrl.signin)

module.exports = router