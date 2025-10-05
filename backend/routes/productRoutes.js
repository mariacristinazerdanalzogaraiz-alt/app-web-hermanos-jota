const express = require('express');
const router = express.Router();
const productos = require('../productos');

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
  res.json(productos);
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
  const producto = productos.find(p => p.id === req.params.id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

module.exports = router;
