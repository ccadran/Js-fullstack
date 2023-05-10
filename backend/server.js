const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5001;

//Connexion à la base de données
connectDB();

const app = express();

//middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//lancer le server
app.listen(port, () =>
  console.log("Le serveur est en marche au port : " + port)
);
