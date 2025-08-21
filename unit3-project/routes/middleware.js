const express = require('express');
const router = express.Router();

// Middleware to log every request
router.use((req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});

router.get('/', (req, res) => {
  res.render('middleware', { message: "Middleware logger triggered!" });
});

module.exports = router;
