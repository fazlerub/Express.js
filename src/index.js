const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
let port = 8000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
//built in middleware for static file handling//
//app.use(express.static(staticPath));
app.set("view engine", "hbs"); //to set the view Engine
app.set("views", templatePath); //when we change views directory (dynamic code directory)

hbs.registerPartials(partialPath);

//template engine route
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/", (req, res) => {
  res.send("Welcome to Express Server!");
});
app.listen(port, (req, res) => {
  console.log("Server listening on port " + port);
});
