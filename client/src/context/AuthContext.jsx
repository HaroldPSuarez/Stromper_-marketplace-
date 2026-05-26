import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("stromper_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  function login(userData) {
    setUser(userData);
    localStorage.setItem("stromper_user", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("stromper_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  // Nunca retorna null — si se usa fuera del Provider devuelve el valor por defecto
  return context;
}