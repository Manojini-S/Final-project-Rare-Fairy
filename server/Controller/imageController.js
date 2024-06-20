

const { upload } = require('../utils/multer.config');
const Category = require('../Models/Gategarydesign'); // Ensure this path is correct

const uploadImage = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('Multer error:', err);
            return res.status(500).send('An error occurred while uploading the image.');
        }

        const { CategoryName, Description, ProductName, Price } = req.body;
        const imageUrl = req.file ? req.file.path : null; // Ensure this matches the field name

        // Check if required fields are provided
        if (!CategoryName || !Description || !ProductName || !Price || !imageUrl) {
            return res.status(400).send('All fields are required.');
        }

        const imageDetails = new Category({
            CategoryName, 
            Description,
            imageUrl,
            ProductName,
            Price
        });

        try {
            await imageDetails.save();
            res.status(201).json({ imageDetails });
        } catch (error) {
            console.error('Error saving image details:', error);
            res.status(500).send('An error occurred while saving the image details.');
        }
    });
};

const getImage = async (req, res) => {
    try {
        const images = await Category.find(); // Find all images
        if (images.length > 0) {
            res.json(images); // Send the found images as JSON response
        } else {
            res.status(404).send('No images found.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while retrieving the images.');
    }
};

const showAllImage = async (req, res) => {
    const { CategoryName } = req.params;
    try {
        const allImages = await Category.find({ CategoryName });

        if (allImages.length === 0) {
            return res.status(404).json({ message: "No images found for this category." });
        }

        return res.status(200).json(allImages);
    } catch (error) {
        console.error("Error finding images:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

const editProduct = async (req, res) => {
    const { id } = req.params;
    const { CategoryName, Description, ProductName, Price } = req.body;
    const imageUrl = req.file ? req.file.path : null; // Handle image upload if present

    // Check if required fields are provided
    if (!CategoryName || !Description || !ProductName || !Price) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const updatedProduct = await Category.findByIdAndUpdate(
            id,
            { CategoryName, Description, ProductName, Price, ...(imageUrl && { imageUrl }) },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).send('Product not found.');
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('An error occurred while updating the product.');
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Category.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).send('Product not found.');
        }

        res.status(200).json({ message: 'Product deleted successfully.' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('An error occurred while deleting the product.');
    }
};

const countAllProducts = async (req, res) => {
    try {
        const count = await Category.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error('Error counting products:', error);
        res.status(500).send('An error occurred while counting products.');
    }
};

const countProductsByCategory = async (req, res) => {
    const { CategoryName } = req.params;
    try {
        const count = await Category.countDocuments({ CategoryName });
        res.status(200).json({ count });
    } catch (error) {
        console.error(`Error counting products for category '${CategoryName}':`, error);
        res.status(500).send(`An error occurred while counting products for category '${CategoryName}'.`);
    }
};

module.exports = {
    uploadImage,
    getImage,
    showAllImage,
    editProduct,
    deleteProduct,
    countAllProducts,
    countProductsByCategory
};
