// Connexion de l'utilisateur
const express = require("express");
const app = express();

// import user from "../models/user";
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Hash le mot de passe avant de l'enregistrer dans la base de données
UserSchema.pre("save", function(next) {
  const user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});


// Modèle de l'utilisateur
const User = mongoose.model("User", UserSchema);

app.post("/login", function(req, res) {
    User.findOne({ email: req.body.email })
      .then(function(user) {
        if (!user) {
          res.status(404).send("Utilisateur introuvable");
        } else {
          bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (result) {
              res.send("Utilisateur connecté");
            } else {
              res.status(401).send("Mot de passe incorrect");
            }
          });
        }
      })
      .catch(function(err) {
          res.status(400).send("Impossible de trouver l'utilisateur");
  });
  });

module.exports = app;
