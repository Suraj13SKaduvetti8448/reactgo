const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() { resolve("I love You !!"); }, 1000);
  });
  const result = await myPromise;
  res.render('asyncawait', { result });
});

module.exports = router;
