import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setEnviado(true);
  };

  return (
    <section className="contacto">
      <h2>Contacto</h2>
      {enviado ? (
        <p className="exito">Gracias por tu mensaje. Nos pondremos en contacto pronto 🤍</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
}

export default ContactForm;
