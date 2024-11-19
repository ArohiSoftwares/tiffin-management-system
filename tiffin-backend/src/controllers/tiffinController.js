const Tiffin = require('../models/Tiffin');

// Get all tiffins
exports.getTiffins = async (req, res) => {
  try {
    const tiffins = await Tiffin.find();
    res.json(tiffins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single tiffin by ID
exports.getTiffinById = async (req, res) => {
  try {
    const tiffin = await Tiffin.findById(req.params.id);
    if (!tiffin) {
      return res.status(404).json({ message: 'Tiffin not found' });
    }
    res.json(tiffin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new tiffin
exports.createTiffin = async (req, res) => {
  const tiffin = new Tiffin(req.body);
  try {
    const savedTiffin = await tiffin.save();
    res.status(201).json(savedTiffin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a tiffin by ID
exports.updateTiffin = async (req, res) => {
  try {
    const updatedTiffin = await Tiffin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTiffin) {
      return res.status(404).json({ message: 'Tiffin not found' });
    }
    res.json(updatedTiffin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a tiffin by ID
exports.deleteTiffin = async (req, res) => {
  try {
    const deletedTiffin = await Tiffin.findByIdAndDelete(req.params.id);
    if (!deletedTiffin) {
      return res.status(404).json({ message: 'Tiffin not found' });
    }
    res.json({ message: 'Tiffin deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};