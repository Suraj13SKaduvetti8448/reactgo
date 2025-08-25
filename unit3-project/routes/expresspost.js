const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('expresspost', { message: "Go ahead and POST to this endpoint!" });
});

router.post('/', (req, res) => {
  res.render('expresspost', { message: "You just called the POST method!" });
});

module.exports = router;
