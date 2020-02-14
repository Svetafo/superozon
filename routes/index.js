const express = require('express');
const router = express.Router();
const Item = require('../model/itemModel');
const mongoose = require('mongoose');

router.post('/result', async (req, res) => {
    console.log(req.body);
    //redirect
});

/* GET home page. */
// router.get('/', function(req, res) {
//   // res.render('index', { title: 'Express' });
//
// });
//
// // let objItems = Item.find({});
//
// Item.findOne({name: 'Смартфон Honor 10 Lite 3/64GB, черный',}, function(err, doc){
//
//
//   if(err) return console.log(err);
//
//   console.log(doc);
// });

module.exports = router;
