const express = require('express');
const router = express.Router();

// Dummy user for example
const USER = { username: "admin", password: "1234" };
const USERS = { username: "user", password: "1234" };

router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    // Normally, you'd set a session or JWT token here
    res.render('profile', { user: USER });
  } else if (username === USERS.username && password === USERS.password) {
    res.render('profile1', { user: USERS }); 
  } else {
    res.render('login', { error: "Invalid credentials" });
  }
});

router.get('/profile', (req, res) => {
  // In a real app, you'd check session or token
  res.render('profile', { user: USER });
});

module.exports = router;
