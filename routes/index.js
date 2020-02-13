const express = require('express');
const router = express.Router();
const fs = require('fs');


router.post('/result', async (req, res) => {
  console.log(req.body);
  //redirect
});

module.exports = router;
