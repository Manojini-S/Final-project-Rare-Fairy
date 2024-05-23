const express = require('express');
const router = express.Router();
const cors = require('cors');
const imageController = require('../Controller/imageController');

router.post('/upload', imageController.uploadImage);
router.get('/getImg',imageController.getImage)


module.exports = router;
