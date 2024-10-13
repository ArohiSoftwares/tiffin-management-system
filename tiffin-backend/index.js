const express = require('express');
const app = express();

// Routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});