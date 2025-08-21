const express = require('express');
const router = express.Router();

// Matches ANY id
router.get('/:id', (req, res) => {
  res.render('dynamicroute', { id: req.params.id });
});

module.exports = router;
