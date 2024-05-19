const express =require('express')
const router = express.Router();
const {login,signup, loginUpdate} = require('../Controller/LoginController')

router.post('/login',loginUpdate)
router.post('/signup',signup)

module.exports = router 
