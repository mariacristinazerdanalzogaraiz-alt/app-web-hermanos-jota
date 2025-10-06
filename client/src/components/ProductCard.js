import React from 'react';
import './ProductCard.css'; // si querés estilos aparte

function ProductCard({ nombre, precio, descripcion, imagen, verDetalle }) {
  return (
    <div className="producto" onClick={verDetalle}>
      <img src={`/img/${imagen}`} alt={nombre} />
      <h2>{nombre}</h2>
      <p className="precio">${precio}</p>
      <p>{descripcion}</p>
      <button className="agregar-carrito">Agregar al Carrito</button>
    </div>
  );
}

export default ProductCard;
