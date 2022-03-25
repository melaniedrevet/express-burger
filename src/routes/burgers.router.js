const express = require("express");
const asyncHandler = require("express-async-handler");
const httpErrors = require("http-errors");

const burgersService = require("../services/burgers.service");

const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const burgers = await burgersService.findAll();

    res.render("burgers/index", {
      burgers,
    });
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const burger = await burgersService.find(req.params.id);
    if (!burger) {
      throw new httpErrors.NotFound();
    }

    res.render("burgers/details", {
      burger,
    });
  })
);

module.exports = router;

