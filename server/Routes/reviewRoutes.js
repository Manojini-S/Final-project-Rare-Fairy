const express = require('express');
const router = express.Router();
const cors = require ('cors')
const reviewController = require('../Controller/ReviewController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3002'
    })
)

router.post('/create',reviewController.createReview);
router.get('/',reviewController.getReview);
// router.put('/update',reviewController.reviewController);
// router.delete('/delete',reviewController.deleteReview);
// router.post('/login',userController.loginUser)

module.exports = router;