const express = require("express");
const router = express.Router();
const fs = require("fs");

// const mainPage = require("../controllers/index").mainPage
// const hi = require("../controllers/index").hello
const { mainPage, hello: hi } = require("../controllers/index");
// const { mainPage: mainPage, hello: hi } = { mainPage: 123, hello: 789 }
// const name = 'Oleg';
// const person = {
//   name,
//   age: 1000
// }

/* GET home page. */
router.get("/", mainPage);

router.get("/hello", hi);

router.get("/feedback", function(req, res) {
  console.log(req.query);
  res.render("feedback.hbs", req.query);
});

router.post("/feedback", function(req, res) {
  const { name, height } = req.body;
  fs.writeFile("db.json", JSON.stringify(req.body), () => {});
  res.json({
    status: "ok",
    data: {
      name,
      height
    }
  });
});

module.exports = router;
