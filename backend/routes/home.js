// Page d'accueil
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Bienvenue sur Melivroo");
  });
  
module.exports = app;