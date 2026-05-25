import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>STROMPER</h1>
      </div>

      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <div className="header-search">
        <input type="text" placeholder="Buscar productos..." />
      </div>

      <div className="header-actions">
        <button className="login-btn">Login</button>
        <button className="cart-btn">🛒</button>
      </div>
    </header>
  );
}

export default Header;
