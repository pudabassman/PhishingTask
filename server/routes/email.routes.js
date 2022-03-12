const express = require('express')
const { verifyToken } = require("../middlewares/authJwt");
const emailCtrl = require('../controllers/email.controller')

const router = express.Router()

router.get('/', [verifyToken], emailCtrl.getSentEmailStatuses)

router.get('/click/:id', emailCtrl.emailClicked)


module.exports = router