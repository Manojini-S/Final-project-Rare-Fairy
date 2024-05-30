const { uploaded } = require('../utils/multer.config');
const Category = require('../Models/Gategarydesign'); // Ensure this path is correct

const uploadImage = (req, res) => {
    uploaded(req, res, async (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred while uploading the image.');
        }

        const { CategoryName, Description } = req.body;
        const imageUrl = req.file ? req.file.path : null; // Ensure this matches the field name

        const imageDetails = new Category({
            CategoryName, // Ensure this matches the field name in the schema
            Description,
            imageUrl // Ensure this matches the field name in the schema
        });

        try {
            await imageDetails.save();
            res.json({ imageDetails });
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while saving the image details.');
        }
    });
};

const getImage = async (req, res) => {
    try {
        const imageFinder = await Category.find(); 
        if (imageFinder.length > 0) {
            res.json(imageFinder);
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
        const allImages = await Category.find({ CategoryName: CategoryName });

        if (allImages.length === 0) {
            return res.status(404).json({ message: "No images found for this category." });
        }

        return res.status(200).json(allImages);
    } catch (error) {
        console.error("Error finding images:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};



module.exports = {
    uploadImage,
    getImage,
    showAllImage
};
