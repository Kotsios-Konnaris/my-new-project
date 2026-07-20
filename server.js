const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [
  {
    id: 1,
    text: "Learn what an API is"
  },
  {
    id: 2,
    text: "Build my first backend"
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "My first backend API is working!"
  });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post("/notes", (req, res) => {
  const newNote = {
    id: notes.length + 1,
    text: req.body.text
  };

  notes.push(newNote);

  res.status(201).json(newNote);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
