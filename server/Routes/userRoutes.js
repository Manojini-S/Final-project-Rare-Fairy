const express = require('express');
const router = express.Router();
const User = require('../Models/User.models');
const cors = require('cors');
const userController = require('../Controller/UserController');

// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

// Route Definitions
router.post('/post', userController.createUser);
router.get('/getuser', userController.getUser);
//router.put('/update', userController.updatedUser);
//router.delete('/delete', userController.deleteUser);
// router.post('/login', userController.loginUser);
router.put('/updateUser/:id', userController.updateUser); 
router.delete('/deleteUser/:id', userController.deleteUser);
router.get("/count", userController.getUserCount); 

module.exports = router;
