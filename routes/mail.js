const express = require("express");
const router = express.Router();
const emailjs = require("emailjs-com");

router.post("/", (req, res) => {
  const { name, societe, phone, email, message } = req.body;
  const templateParams = {
    from_name: name,
    societe: societe,
    phone: phone,
    reply_to: email,
    message: message,
  };
  emailjs
    .send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.EMAILJS_USER_ID
    )
    .then(
      function (res) {
        res.status(200).json({ message: "E-mail envoyé avec succès" });
      },
      function (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'envoi de l'e-mail" });
      }
    );
});
module.exports = router;
