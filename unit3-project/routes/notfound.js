const express = require('express');
const router = express.Router();

// This will catch any route under /notfound/*
router.get('*', (req, res) => {
  res.render('notfound', { url: req.originalUrl });
});

module.exports = router;
