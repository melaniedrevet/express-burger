const express = require("express");

const menusRouter = require("./menus.router");
const burgersRouter = require("./burgers.router");
const boissonsRouter = require("./boissons.router");
const accompagnementsRouter = require("./accompagnements.router");

const router = express.Router();

router.get("/", (_req, res) => {
  res.render("home");
});

router.use("/menus", menusRouter);
router.use("/burgers", burgersRouter);
router.use("/boissons", boissonsRouter);
router.use("/accompagnements", accompagnementsRouter);

module.exports = router;