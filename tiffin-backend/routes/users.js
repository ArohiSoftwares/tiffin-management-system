const express = require('express');
const router = express.Router();

// Controller functions (dummy)
router.post('/register', (req, res) => {
  res.send('User Registered');
});

router.post('/login', (req, res) => {
  res.send('User Logged In');
});

module.exports = router;