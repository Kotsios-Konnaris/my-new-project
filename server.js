const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "My first backend API is working!"
  });
});

app.get("/notes", (req, res) => {
  res.json([
    {
      id: 1,
      text: "Learn what an API is"
    },
    {
      id: 2,
      text: "Build my first backend"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
