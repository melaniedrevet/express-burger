const express = require("express");
const asyncHandler = require("express-async-handler");
const httpErrors = require("http-errors");

const menusService = require("../services/menus.service");
const burgersService = require("../services/burgers.service");
const boissonsService = require("../services/boissons.service");
const accompagnementsService = require("../services/accompagnements.service");

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

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const menu = await menusService.find(req.params.id);
    if (!menu) {
      throw new httpErrors.NotFound();
    }

    const burgers = await burgersService.findByBurgerId(menu.burgerId);
    const boissons = await boissonsService.findByBoissonId(menu.boissonId);
    const accompagnements = await accompagnementsService.findByAccompagnementId(menu.accompagnementId);

    res.render("menus/details", {
      menu,
      burgers,
      boissons,
      accompagnements,
    });
  })
);


module.exports = router;
