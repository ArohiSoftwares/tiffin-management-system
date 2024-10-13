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
