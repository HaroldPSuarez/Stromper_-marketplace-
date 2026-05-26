import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleLogout() {
    logout();
    setDropdownOpen(false);
    navigate("/");
  }

  return (
    <header className="header">

      <Link to="/" className="header-logo">STROMPER</Link>

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
        {user ? (
          <div className="user-menu">
            <button
              className="user-btn"
              onClick={() => setDropdownOpen(o => !o)}
            >
              <span className="user-avatar">{user.name.charAt(0).toUpperCase()}</span>
              <span className="user-name">{user.name.split(" ")[0]}</span>
              <span className="user-arrow">{dropdownOpen ? "▲" : "▼"}</span>
            </button>

            {dropdownOpen && (
              <>
                {/* capa invisible para cerrar al click afuera */}
                <div className="dropdown-backdrop" onClick={() => setDropdownOpen(false)} />
                <div className="user-dropdown">
                  <div className="dropdown-info">
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>
                  <hr className="dropdown-hr" />
                  <button className="dropdown-logout" onClick={handleLogout}>
                    🚪 Cerrar sesión
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}

        <button className="cart-btn">🛒</button>
      </div>

    </header>
  );
}

export default Header;