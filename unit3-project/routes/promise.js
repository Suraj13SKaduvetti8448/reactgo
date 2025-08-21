const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  function myDisplayer(some) {
    return some;
  }

  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function(value) { res.render('promise', { result: value }); },
    function(error) { res.render('promise', { result: error }); }
  );
});

module.exports = router;
