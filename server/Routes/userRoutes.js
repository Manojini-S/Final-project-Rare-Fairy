const express = require('express');
const router = express.Router();
const cors = require ('cors')
const userController = require('../Controller/CustomerControllers')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3002'
    })
)

router.post('/create',userController.createUser)
router.get('/',userController.getUser);

module.exports = router;