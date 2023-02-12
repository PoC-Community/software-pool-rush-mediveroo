

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
  