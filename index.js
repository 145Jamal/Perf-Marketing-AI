import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname)); // Serve static files like index.html

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/generate", async (req, res) => {
  const { business, goal, budget } = req.body;

  // Dummy AI response — replace with real AI later
  const result = `Here’s a sample media plan for a ${business} business with the goal of "${goal}" and a monthly budget of ₹${budget}.`;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
