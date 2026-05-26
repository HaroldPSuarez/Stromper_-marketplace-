import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>STROMPER</h2>
          <p>Tu tienda gamer y tecnológica favorita 😎</p>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer-social">
          <h3>Redes</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>📧 soporte@stromper.co</p>
          <p>📞 +57 (1) 234 5678</p>
          <p>🕐 Lun – Vie: 8am – 6pm</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 STROMPER Marketplace — Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;