import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es requerido";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email inválido";
    if (!form.subject.trim()) e.subject = "El asunto es requerido";
    if (form.message.trim().length < 10) e.message = "El mensaje debe tener al menos 10 caracteres";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSent(true);
  }

  return (
    <>
      <Header />

      <div className="contact-hero">
        <h1>Contáctanos</h1>
        <p>¿Tienes dudas, sugerencias o necesitas soporte? Estamos aquí para ayudarte.</p>
      </div>

      <main className="contact-page">
        {/* Info rápida */}
        <div className="contact-info-cards">
          <div className="info-card">
            <span>📧</span>
            <h3>Email</h3>
            <p>soporte@stromper.co</p>
          </div>
          <div className="info-card">
            <span>📞</span>
            <h3>Teléfono</h3>
            <p>+57 (1) 234 5678</p>
          </div>
          <div className="info-card">
            <span>🕐</span>
            <h3>Horario</h3>
            <p>Lun – Vie: 8am – 6pm</p>
          </div>
          <div className="info-card">
            <span>📍</span>
            <h3>Ubicación</h3>
            <p>Bogotá, Colombia</p>
          </div>
        </div>

        {/* Formulario */}
        <div className="contact-form-wrapper">
          {sent ? (
            <div className="contact-success">
              <span>✅</span>
              <h2>¡Mensaje enviado!</h2>
              <p>Nos pondremos en contacto contigo pronto.</p>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div className="contact-form">
              <h2>Envíanos un mensaje</h2>

              <div className="form-row">
                <div className="form-group">
                  <label>Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Asunto *</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={errors.subject ? "error" : ""}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="pedido">Estado de pedido</option>
                  <option value="devolucion">Devolución / cambio</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label>Mensaje *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  className={errors.message ? "error" : ""}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button className="submit-btn" onClick={handleSubmit}>
                Enviar mensaje →
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;