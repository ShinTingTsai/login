const express = require('express')
const router = express.Router()
const login = require('./modules/login')
const welcome = require('./modules/welcome')


router.use('/signout', welcome);

router.use('/', login)


module.exports = router
