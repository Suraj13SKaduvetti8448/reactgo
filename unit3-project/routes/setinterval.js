const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let d = new Date();
  const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  res.render('setinterval', { time });
});

module.exports = router;
