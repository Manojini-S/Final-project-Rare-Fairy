// multerConfig.js

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Aridesign', 
        allowedFormats: ["jpg", "jpeg", "png"],
        transformation: [{ width: 500, height: 500, crop: 'limit' }],
        resource_type: "auto"
    }
});

const upload = multer({ storage: storage }).single("photo");
module.exports = { upload };
