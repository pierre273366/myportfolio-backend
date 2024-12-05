const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const mailRoute = require("./routes/mail");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/send-email", mailRoute);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
