const express = require('express');
const router = express.Router();
const tiffinController = require('../controllers/tiffinController');

// Get all tiffins
router.get('/', tiffinController.getTiffins);

// Get a single tiffin by ID
router.get('/:id', tiffinController.getTiffinById);

// Create a new tiffin
router.post('/', tiffinController.createTiffin);

// Update a tiffin by ID
router.put('/:id', tiffinController.updateTiffin);

// Delete a tiffin by ID
router.delete('/:id', tiffinController.deleteTiffin);

module.exports = router;