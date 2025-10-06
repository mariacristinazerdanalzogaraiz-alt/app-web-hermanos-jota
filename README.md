#  App Web Hermanos Jota

Aplicación web desarrollada para el Sprint 3 y 4 del curso **Full Stack Developer en ITBA**, con el objetivo de representar digitalmente el catálogo de muebles artesanales de **Hermanos Jota**, integrando frontend y backend en una experiencia funcional, estética y emocionalmente coherente.

---

##  Integrantes

- María Cristina Zerdan Alzogaraiz
- Melina Sarli Ochat 
- Leonardo Figueroa
- Tiziano Daniel Siilvestri
  

---

##  Arquitectura y decisiones tomadas

La aplicación se estructura en dos carpetas principales:

- `/client`: frontend desarrollado con React
- `/backend`: servidor Express con endpoint `/api/productos`

La UI se descompone en componentes reutilizables para facilitar la escalabilidad y la claridad del código. Se priorizó la coherencia visual con la identidad de marca, el manejo de estados en React y la separación de responsabilidades entre frontend y backend.

---

##  Estructura del proyecto

```
SPRINT 3 Y 4/
├── backend/
│   ├── routes/
│   ├── server.js
│   └── productos.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   └── ContactForm.jsx
│   ├── public/
│   ├── package.json
│   └── .env
└── README.md
```
---

##  Funcionalidades implementadas

-  **Catálogo de productos**  
  - Fetch a `/api/productos` al cargar  
  - Estados de “Cargando…” y “Error al cargar los productos”  
  - Renderizado con `.map()` y `<ProductCard />` por cada producto

-  **Detalle de producto**  
  - Renderizado condicional desde `<App />`  
  - Al hacer clic en una tarjeta, se muestra `<ProductDetail />` con la info completa

-  **Carrito de compras**  
  - Estado global en `<App />`  
  - Botón “Añadir al carrito” en `<ProductDetail />`  
  - Contador en `<Navbar />` actualizado vía props

-  **Formulario de contacto**  
  - Componente controlado con `useState`  
  - `console.log` de los datos al enviar  
  - Mensaje de éxito en la UI

---

##  Estética y branding

- Paleta cálida y natural, coherente con Hermanos Jota
- Tipografías: Inter + Playfair Display
- Tarjetas con sombra, bordes suaves y animación al hover
- Detalle de producto en caja blanca con imagen y descripción
- Formulario estilizado con botón verde salvia

---

##  Tecnologías utilizadas

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Control de versiones**: Git + GitHub
- **Herramientas**: GitHub Desktop, VS Code

---

##  Cómo instalar y correr el proyecto


### 🔹 1. Clonar el repositorio


git clone https://github.com/mariacristinazerdanalzogaraiz-alt/app-web-hermanos-jota.git

### 🔹 2. Instalar dependencias en /backend y en /client


cd backend
npm install

cd ../client
npm install

### 🔹 3. Iniciar servidores

#### Backend

cd ../backend
node server.js

#### O con nodemon

npx nodemon server.js

#### Fontend 

cd ../client
npm start
```bash
