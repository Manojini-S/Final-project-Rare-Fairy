// const express = require('express');
// const router = express.Router();
// // Assuming you want to upload multiple files with different field names
// router.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), (req, res) => {
//   try {
//     const files = req.files;
//     console.log(files);
//     // Process the uploaded files
//     const imageUrl = files.image ? files.image[0].path : null;
//     const thumbnailUrl = files.thumbnail ? files.thumbnail[0].path : null;
//     // Respond with the URLs or any other data
//     res.json({ imageUrl, thumbnailUrl });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred while uploading the images.');
//   }
// });
// module.exports = router;
  