const express = require("express");

const menuRouter = require("./menu.router");
const burgerRouter = require("./burger.router");
const boissonRouter = require("./boisson.router");
const accompagnementRouter = require("./accompagnement.router");

const router = express.Router();

router.get("/", (_req, res) => {
  res.render("home");
});

router.use("/menu", menuRouter);
router.use("/burger", burgerRouter);
router.use("/boisson", boissonRouter);
router.use("/accompagnement", accompagnementRouter);

module.exports = router;