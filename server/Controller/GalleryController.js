// // controllers/galleryController.js
// const Gallery = require('../Models/Gallery.models');

// // Create a new gallery item
// exports.createGalleryItem = async (req, res) => {
//     try {
//         const { imageUrl } = req.body;
//         const newGalleryItem = new Gallery({ imageUrl });
//         const savedItem = await newGalleryItem.save();
//         res.status(201).json(savedItem);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// // Get all gallery items
// exports.getAllGalleryItems = async (req, res) => {
//     try {
//         const items = await Gallery.find();
//         res.status(200).json(items);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // Get a single gallery item by ID
// exports.getGalleryItemById = async (req, res) => {
//     try {
//         const item = await Gallery.findById(req.params.id);
//         if (!item) {
//             return res.status(404).json({ message: 'Item not found' });
//         }
//         res.status(200).json(item);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // Update a gallery item by ID
// exports.updateGalleryItem = async (req, res) => {
//     try {
//         const { imageUrl } = req.body;
//         const updatedItem = await Gallery.findByIdAndUpdate(
//             req.params.id,
//             { imageUrl },
//             { new: true, runValidators: true }
//         );
//         if (!updatedItem) {
//             return res.status(404).json({ message: 'Item not found' });
//         }
//         res.status(200).json(updatedItem);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// // Delete a gallery item by ID
// exports.deleteGalleryItem = async (req, res) => {
//     try {
//         const deletedItem = await Gallery.findByIdAndDelete(req.params.id);
//         if (!deletedItem) {
//             return res.status(404).json({ message: 'Item not found' });
//         }
//         res.status(200).json({ message: 'Item deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
