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

  app.get("/api/compliment", (req, res) => {
    const compliments = [
      "A beautiful, smart, and loving person will be coming into your life",
      "A dubious friend may be an enemy in camouflage. ",
      "Courtesy begins in the home",
      "Emulate what you respect in your friends.",
      "Fear and desire two sides of the same coin."
    ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.listen(4000, () => console.log("Server running on 4000"));


const quotes  = [
  "The purpose of our lives is to be happy",
  " Get busy living or get busy dying",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Money and success don’t change people; they merely amplify what is already there.",
];

app.get("/api/quotes/compliment/quotes", (req, res) => {
  console.log(req.query);
 
    res.status(200).send(quotes);
  }
});