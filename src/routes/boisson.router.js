const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.render("boisson/index");
});

module.exports = router;