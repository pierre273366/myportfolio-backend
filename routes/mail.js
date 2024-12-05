const express = require("express");
const router = express.Router();
const emailjs = require("emailjs-com");

router.post("/send", (req, res) => {
  const { name, societe, phone, email, message } = req.body;

  const templateParams = {
    name: name,
    societe: societe,
    phone: phone,
    email: email,
    message: message,
  };

  emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

  emailjs
    .send(
      process.env.EMAILJS_SERVICE_ID,
      "template_no_template",
      templateParams,
      process.env.EMAILJS_PUBLIC_KEY_PUBLIC_KEY
    )
    .then(() => {
      res.status(200).json({ message: "Email sent successfully!" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Failed to send email.", error: error.toString() });
    });
});

module.exports = router;
