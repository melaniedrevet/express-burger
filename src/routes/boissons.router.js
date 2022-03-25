const express = require("express");
const asyncHandler = require("express-async-handler");
const httpErrors = require("http-errors");

const boissonsService = require("../services/boissons.service");

const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const boissons = await boissonsService.findAll();

    res.render("boissons/index", {
      boissons,
    });
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const boisson = await boissonsService.find(req.params.id);
    if (!boisson) {
      throw new httpErrors.NotFound();
    }

    res.render("boissons/details", {
      boisson,
    });
  })
);

module.exports = router;
