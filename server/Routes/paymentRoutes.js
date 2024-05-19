const express = require('express');
const router = express.Router();
const cors = require ('cors')
const PaymentController = require('../Controller/PaymentController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3002'
    })
)

router.post('/create',PaymentController.createPayment);
router.get('/',PaymentController.getPayment);
// router.put('/update',PaymentController.updatePayment);
// router.delete('/delete',PaymentController.deletePayment);
// router.post('/login',userController.loginUser)

module.exports = router;