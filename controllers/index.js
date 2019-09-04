const express = require("express");
const router = express.Router();
const fs = require("fs");

module.exports = {
  mainPage: (req, res) => res.render("index", { title: "Express" }),
  hello: (req, res) => res.render("hello", { name: "world!" })
};
