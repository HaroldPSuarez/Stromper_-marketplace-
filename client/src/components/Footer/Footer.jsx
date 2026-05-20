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

          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Ofertas</a>
          <a href="#">Contacto</a>
        </div>

        <div className="footer-social">
          <h3>Redes</h3>

          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 STROMPER Marketplace - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
