const http = require("http");

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Performance Marketing AI is live!\n");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
