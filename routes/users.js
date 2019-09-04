const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res) {
  res.send("users here!");
});

router.get("/form", function(req, res) {
  res.render("users");
});

router.post("/", (req, res) => {
  console.log("Hello i am console");
  res.redirect("/");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`PROFILE ${id}`);
});

router.get("/:id/:action", (req, res) => {
  const { id, action } = req.params;
  res.send(`PROFILE ${id} ${action}`);
});
module.exports = router;
