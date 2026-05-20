import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>STROMPER</h1>
      </div>

      <nav className="header-nav">
        <button>Inicio</button>

        <button>Productos</button>

        <button>Ofertas</button>

        <button>Categorías</button>

        <button>Contacto</button>
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
