const express = require('express');
const router = express.Router();

// First middleware
router.use((req, res, next) => {
  console.log("Start");
  next();
});

// Route handler
router.get('/', (req, res, next) => {
  res.render('middlewareorder', { message: "Middle" });
  next();
});

// Final middleware
router.use('/', (req, res) => {
  console.log("End");
});

module.exports = router;
