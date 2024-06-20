const express = require('express');
const router = express.Router();
const cors = require('cors');
const imageController = require('../Controller/imageController');

router.post('/upload', imageController.uploadImage);
router.get('/getImg',imageController.getImage)
router.get ('/showimage/:CategoryName',imageController.showAllImage)

// router.put('/edit/:id', upload.single('image'), imageController.editProduct); // Add this line
router.delete('/delete/:id', imageController.deleteProduct); // Add this line
router.get('/count', imageController.countAllProducts ); // Get count of all products



module.exports = router;
