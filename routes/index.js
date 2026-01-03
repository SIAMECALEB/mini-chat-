const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Home
router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages
  });
});

// New message form
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Handle new message
router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;

  messages.push({
    user: messageUser,
    text: messageText,
    added: new Date()
  });

  res.redirect("/");
});

// Message details
router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  res.render("message", { message });
});

module.exports = router;