const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A soft voice may be awfully persuasive.",
    "Competence like yours is underrated.",
    "Happy life is just in front of you.",
    "How you look depends on where you go.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
});

app.get("/api/quote", (req, res) => {
  const quotes = [
    "Be yourself; everyone else is already taken.",
    "Do not let what you cannot do interfere with what you can do.",
    "A journey of a thousand leagues begins beneath one’s feet.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuotes = quotes[randomIndex];

  res.status(200).send(randomQuotes);
});

app.listen(4000, () => console.log("Server running on 4000"));
