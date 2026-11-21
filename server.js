const express = require('express');
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: 'Mechanical Keyboard', price: 79.0 },
  { id: 2, name: 'USB-C Hub', price: 39.0 }
];

let cart = [];

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/products', (_req, res) => res.json(products));
app.post('/cart', (req, res) => {
  const item = products.find((p) => p.id === Number(req.body.productId));
  if (!item) return res.status(404).json({ error: 'Product not found' });
  cart.push(item);
  res.status(201).json({ cart });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Shopping API listening on ${port}`));
