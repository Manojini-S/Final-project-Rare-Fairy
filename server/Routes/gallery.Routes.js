// routes/galleryRoutes.js
const express = require('express');
const router = express.Router();
const galleryController = require('../Controller/GalleryController');




// Define routes
router.post('/', galleryController.createGalleryItem);
router.get('/', galleryController.getAllGalleryItems);
router.get('/:id', galleryController.getGalleryItemById);
router.put('/:id', galleryController.updateGalleryItem);
router.delete('/:id', galleryController.deleteGalleryItem);

module.exports = router;
