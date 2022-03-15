const express = require("express");
const asyncHandler = require("express-async-handler");
const httpErrors = require("http-errors");

const menusService = require("../services/menus.service");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const menus = await menusService.findAll();

    res.render("menus/index", {
      menus,
    });
  })
);

module.exports = router;
