const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const app = express();
const cors = require("cors");

// Connection à la base de données
mongoose.connect("mongodb://localhost/Melivroo", { useNewUrlParser: true });

// // Importer les routes
// const home = require('routes/home.js');
// const register = require('routes/register.js');
// const login = require('routes/login.js');
// const account = require('routes/account.js');

// // Afficher les routes
// app.use("/", home);
// app.use("/register", register);
// app.use("/login", login);
// app.use("/account", account);


// Modèle de l'utilisateur
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

// Modèle de la commande
const OrderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true
  },
  ProductId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

// Modèle du produit
const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  image: {
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

// Configurez body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connexion de l'utilisateur
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

// Inscription de l'utilisateur
app.post("/register", function(req, res) {
    const user = new User({
      id: uuid.v4(),
      email: req.body.email,
      password: req.body.password
    });
    console.log(user.id);
    user
      .save()
      .then(function() {
        res.send("Utilisateur enregistré avec succès");
      })
      .catch(function(err) {
        res.status(400).send("Impossible d'enregistrer l'utilisateur");
      });
  });

// Afficher les détails de l'utilisateur
app.get("/account/:id", function(req, res) {
  User.findById(req.params.id)
    .then(function(user) {
      res.send(user);
    })
    .catch(function(err) {
      res.status(400).send("Impossible de trouver l'utilisateur");
    });
});

// Modifier les détails de l'utilisateur
app.put("/account/:id", function(req, res) {
  User.findById(req.params.id)
    .then(function(user) {
      user.email = req.body.email;
      user.password = req.body.password;
      user
        .save()
        .then(function() {
          res.send("Utilisateur mis à jour avec succès");
        })
        .catch(function(err) {
          res.status(400).send("Impossible de mettre à jour l'utilisateur");
        });
    })
    .catch(function(err) {
      res.status(400).send("Impossible de trouver l'utilisateur");
    });
});

// Afficher les commandes de l'utilisateur
app.get("/orders/:id", function(req, res) {
  Order.find({ userId: req.params.id })
    .then(function(orders) {
      res.send(orders);
    })
    .catch(function(err) {
      res.status(400).send("Impossible de trouver les commandes");
    });
});

// Nouvelle commande
app.post("/orders", function(req, res) {
  const order = new Order({
    id: uuid.v4(),
    userId: req.body.userId,
    ProductId: req.body.ProductId,
    quantity: req.body.quantity,
    price: req.body.price,
    status: req.body.status
  });
  order
    .save()
    .then(function() {
      res.send("Commande enregistrée avec succès");
    })
    .catch(function(err) {
      res.status(400).send("Impossible d'enregistrer la commande");
    });
});

app.get("/", function(req, res) {
  res.send("Bienvenue sur Melivroo");
});

// Écouter les requêtes sur le port 3000
app.listen(3000, function() {
  console.log("Le serveur est en cours d'exécution sur le port 3000");
});
