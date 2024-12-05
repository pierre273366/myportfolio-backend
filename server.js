const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const mailRoute = require("./routes/mail");
app.use("/mail", mailRoute);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});

module.exports = server;
