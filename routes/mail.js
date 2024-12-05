const express = require("express");
const router = express.Router();
const emailjs = require("emailjs-com");

router.post("/", async (req, res) => {
  try {
    const { name, societe, phone, email, message } = req.body;

    const templateParams = {
      name,
      societe,
      phone,
      email,
      message,
    };

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      "template no template",
      templateParams,
      process.env.EMAILJS_USER_ID
    );

    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.toString() });
  }
});

module.exports = router;
