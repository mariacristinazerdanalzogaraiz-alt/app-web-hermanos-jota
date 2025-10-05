import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const verDetalle = (producto) => {
    setProductoSeleccionado(producto);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => [...prev, producto]);
  };

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo-area">
          <img src="/img/logo.svg" alt="Logo Hermanos Jota" className="logo" />
          <h1>Mueblería Hermanos Jota</h1>
        </div>
        <div className="carrito">
          🛒 {carrito.length}
        </div>
      </header>

      <main>
        {productoSeleccionado ? (
          <ProductDetail
            producto={productoSeleccionado}
            volver={() => setProductoSeleccionado(null)}
            agregarAlCarrito={agregarAlCarrito}
          />
        ) : (
          <div className="productos-grid">
            {productos.map(producto => (
              <ProductCard
                key={producto.id}
                {...producto}
                verDetalle={() => verDetalle(producto)}
              />
            ))}
          </div>
        )}

        <ContactForm />
      </main>

      <footer className="footer">
        <p>© 2025 Hermanos Jota — Diseño funcional con alma</p>
      </footer>
    </>
  );
}

export default App;
