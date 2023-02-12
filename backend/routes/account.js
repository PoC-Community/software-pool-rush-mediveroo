

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
  