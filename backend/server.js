const express = require("express");
const port = 5000;

const app = express();

app.get("/post", (req, res) => {
  res.json({ message: "Voici les données" });
});

//lancer le server
app.listen(port, () =>
  console.log("Le serveur est en marche au port : " + port)
);
