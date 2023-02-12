// Inscription de l'utilisateur
const express = require("express");
const app = express.Router();

app.post("/register", function(req, res) {
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });
    user
      .save()
      .then(function() {
        res.send("Utilisateur enregistré avec succès");
      })
      .catch(function(err) {
        res.status(400).send("Impossible d'enregistrer l'utilisateur");
      });
  });

module.exports = app;
