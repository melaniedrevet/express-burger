const path = require("path");
const express = require("express");
const appRoutes = require("./routes");

const app = express();


// Si ça ne marche pas avec pug 
app.engine('pug', require('pug').__express);

app.set("views", path.resolve(__dirname, "..", "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({extended:false}));

app.use("/", appRoutes);

app.use(express.static(path.resolve(__dirname, "..", "public")));


module.exports = app;



