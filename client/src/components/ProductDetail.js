function ProductDetail({ producto, volver, agregarAlCarrito }) {
  const { nombre, imagen, descripcion, medidas, materiales, acabado, precio } = producto;

  return (
    <div className="detalle-producto">
      <button onClick={volver} className="volver">← Volver al catálogo</button>
      <img src={`/img/${imagen}`} alt={nombre} />
      <h2>{nombre}</h2>
      <p className="precio">${precio}</p>
      <p>{descripcion}</p>
      <ul>
        {medidas && <li><strong>Medidas:</strong> {medidas}</li>}
        {materiales && <li><strong>Materiales:</strong> {materiales}</li>}
        {acabado && <li><strong>Acabado:</strong> {acabado}</li>}
      </ul>
      <button className="agregar-carrito" onClick={() => agregarAlCarrito(producto)}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductDetail;
