import express from "express";

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("Hello, Performance Marketing AI is live!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
