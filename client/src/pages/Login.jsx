import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, registerUser } from "../services/api";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Login() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setServerError("");
  }

  function validateLogin() {
    const e = {};
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email inválido";
    if (form.password.length < 6) e.password = "Mínimo 6 caracteres";
    return e;
  }

  function validateRegister() {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Nombre muy corto";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email inválido";
    if (form.password.length < 6) e.password = "Mínimo 6 caracteres";
    if (form.password !== form.confirm) e.confirm = "Las contraseñas no coinciden";
    return e;
  }

  async function handleSubmit() {
    const errs = mode === "login" ? validateLogin() : validateRegister();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      const result = mode === "login"
        ? await loginUser(form.email, form.password)
        : await registerUser(form.name, form.email, form.password);

      if (result.ok) {
        login(result.user);
        navigate("/");
      } else {
        setServerError(result.message || "Ocurrió un error");
      }
    } catch {
      setServerError("No se pudo conectar al servidor");
    } finally {
      setLoading(false);
    }
  }

  function switchMode(m) {
    setMode(m);
    setErrors({});
    setServerError("");
    setForm({ name: "", email: "", password: "", confirm: "" });
  }

  return (
    <div className="login-page">
      {/* Panel izquierdo: branding */}
      <div className="login-brand">
        <Link to="/" className="brand-logo">STROMPER</Link>
        <h2>Tu tienda gamer favorita</h2>
        <p>Los mejores periféricos, laptops y tecnología con descuentos exclusivos.</p>
        <div className="brand-badges">
          <span>⚡ Envío rápido</span>
          <span>🔒 Compra segura</span>
          <span>🎁 Ofertas diarias</span>
        </div>
      </div>

      {/* Panel derecho: formulario */}
      <div className="login-form-panel">
        <div className="login-card">
          {/* Tabs */}
          <div className="login-tabs">
            <button
              className={mode === "login" ? "active" : ""}
              onClick={() => switchMode("login")}
            >
              Iniciar sesión
            </button>
            <button
              className={mode === "register" ? "active" : ""}
              onClick={() => switchMode("register")}
            >
              Registrarse
            </button>
          </div>

          <div className="login-fields">
            {mode === "register" && (
              <div className="field-group">
                <label>Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
            )}

            <div className="field-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="field-group">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={errors.password ? "error" : ""}
              />
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            {mode === "register" && (
              <div className="field-group">
                <label>Confirmar contraseña</label>
                <input
                  type="password"
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={errors.confirm ? "error" : ""}
                />
                {errors.confirm && <span className="field-error">{errors.confirm}</span>}
              </div>
            )}

            {serverError && (
              <div className="server-error">⚠️ {serverError}</div>
            )}

            <button
              className="login-submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading
                ? "Cargando..."
                : mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
            </button>

            {mode === "login" && (
              <p className="login-hint">
                ¿No tienes cuenta?{" "}
                <button className="link-switch" onClick={() => switchMode("register")}>
                  Regístrate gratis
                </button>
              </p>
            )}

            {mode === "register" && (
              <p className="login-hint">
                ¿Ya tienes cuenta?{" "}
                <button className="link-switch" onClick={() => switchMode("login")}>
                  Inicia sesión
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;