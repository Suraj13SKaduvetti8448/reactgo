const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('validator', { errors: null });
});

router.post('/submit', [
  check('email', 'Invalid email').isEmail().isLength({ min: 10, max: 30 }),
  check('name', 'Name length should be 10 to 20 characters').isLength({ min: 10, max: 20 }),
  check('mobile', 'Mobile must be 10 digits').isLength({ min: 10, max: 10 }),
  check('password', 'Password must be 8-10 chars').isLength({ min: 8, max: 10 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('validator', { errors: errors.array() });
  } else {
    res.render('validator', { errors: [] });
  }
});

module.exports = router;
