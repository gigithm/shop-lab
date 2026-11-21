const http = require("http");

const items = [
  { id: 1, name: "Notebook", price: 120 },
  { id: 2, name: "Mechanical Pencil", price: 80 }
];

const server = http.createServer((req, res) => {
  if (req.url === "/items") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ items }));
    return;
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Shop Lab Build OK");
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`Listening on ${port}`));
}

module.exports = { server, items };
