const express = require("express");
const asyncHandler = require("express-async-handler");
const httpErrors = require("http-errors");

const accompagnementsService = require("../services/accompagnements.service");

const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const accompagnements = await accompagnementsService.findAll();

    res.render("accompagnements/index", {
      accompagnements,
    });
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const accompagnement = await accompagnementsService.find(req.params.id);
    if (!accompagnement) {
      throw new httpErrors.NotFound();
    }

    res.render("accompagnements/details", {
      accompagnement,
    });
  })
);

module.exports = router;
