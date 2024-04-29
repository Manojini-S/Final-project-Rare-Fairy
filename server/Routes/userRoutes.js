const express = require('express');
const router = express.Router();
const userController = require('../Controller/CustomerControllers')

router.post('/create',userController.createUser)
router.get('/',userController.getUser);

module.exports = router;