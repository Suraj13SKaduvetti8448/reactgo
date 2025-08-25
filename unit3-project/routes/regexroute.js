const express = require('express');
const router = express.Router();

// Only matches IDs that are exactly 5 digits long
router.get('/:id([0-9]{5})', (req, res) => {
  res.render('regexroute', { id: req.params.id });
});

module.exports = router;
