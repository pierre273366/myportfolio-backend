require("dotenv").config();
const express = require("express");
const mailRouter = require("./routes/mail");
const app = express();

app.use(express.json());
app.use("/api/mail", mailRouter);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

module.exports = server;
