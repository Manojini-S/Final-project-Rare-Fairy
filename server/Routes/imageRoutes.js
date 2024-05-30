const express = require('express');
const router = express.Router();
const cors = require('cors');
const imageController = require('../Controller/imageController');

router.post('/upload', imageController.uploadImage);
router.get('/getImg',imageController.getImage)
router.get ('/showimage/:CategoryName',imageController.showAllImage)


module.exports = router;
