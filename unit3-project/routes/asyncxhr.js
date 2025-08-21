const express = require('express');
const router = express.Router();

// Simulating an async file fetch using XHR
router.get('/', (req, res) => {
  res.render('asyncxhr', { content: null });
});

// Endpoint that simulates serving "mycar.html"
router.get('/file', (req, res) => {
  // In real case, you could read from filesystem
  res.send("<h3>🚗 Car Details: MyCar 2025 Model</h3>");
});

module.exports = router;
