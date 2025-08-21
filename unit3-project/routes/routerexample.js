const express = require('express');
const router = express.Router();

// Import the "things" router
const things = require('./things');

// Attach "things" router at /routerexample/things
router.use('/things', things);

router.get('/', (req, res) => {
  res.render('routerexample', { message: "Router example loaded. Try /routerexample/things" });
});

module.exports = router;
