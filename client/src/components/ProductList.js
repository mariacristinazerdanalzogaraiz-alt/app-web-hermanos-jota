import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ verDetalle }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <div className="product-list">
      {productos.map(producto => (
        <ProductCard 
          key={producto.id} 
          {...producto} 
          verDetalle={() => verDetalle(producto)} 
        />
      ))}
    </div>
  );
}

export default ProductList;
