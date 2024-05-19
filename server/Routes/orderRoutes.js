const express = require('express');
const router = express.Router();
const cors = require ('cors')
const orderController = require('../Controller/OrderController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3002'
    })
)

router.post('/create',orderController.createOrder);
router.get('/',orderController.getOrder);
// router.put('./update',orderController.updateOrder);
// router.post('/login',orderController.loginUser)

module.exports = router;