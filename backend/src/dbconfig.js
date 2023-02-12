
const mongoose = require("mongoose");


// Connection à la base de données
mongoose.connect("mongodb://localhost/Melivroo", { useNewUrlParser: true });


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
  

// Modèle de l'utilisateur
const User = mongoose.model("User", UserSchema);
