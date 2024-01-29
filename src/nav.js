const express = require("express");
const app = express();
//Routing in express.js ._.
app.get("/", (req, res) => {
  //res.send("<h1>Welcome to My Home Page</h1>");
  //res.send("<h1>Welcome to My Home Page again</h1>");
  res.write("<h1>Welcome to My Home Page</h1>");
  res.send();
});
app.get("/about", (req, res) => {
  res.send("Welcome to My about Page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to My contact Page");
});
app.get("/temp", (req, res) => {
  res.send("Welcome to My temperature Page");
});

app.listen("4000", (req, res) => {
  console.log("Server listening on 4000");
});
