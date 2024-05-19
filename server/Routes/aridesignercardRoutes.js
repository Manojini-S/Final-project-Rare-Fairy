// aridesignercardRoutes.js

const express = require('express');
const router = express.Router();
const cors = require('cors');
const AridesignerController = require('../Controller/AridesigncardController');

// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3002'
    })
);

// Define routes
router.post('/create', AridesignerController.createAridesigner);
// router.put('/update',AridesignerController.updateAridesign);
// router.get('/', AridesignerController.getAridesigner);

module.exports = router;
