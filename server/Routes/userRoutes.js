const express = require('express');
const router = express.Router();
const cors = require ('cors')
const userController = require('../Controller/UserController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000' 
    })
)

router.post('/post',userController.createUser);
router.get('/',userController.getUser);
// router.put('/update',userController.updatedUser);
// router.delete('/delete',userController.deleteUser);
// router.post('/login',userController.loginUser);

module.exports = router;