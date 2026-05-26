import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../services/api";
import "./Offers.css";

function Ofertas() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [sortBy, setSortBy] = useState("descuento");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data.filter(p => p.discount && p.discount > 0));
  }

  // Categorías únicas presentes en ofertas
  const categories = ["todas", ...new Set(products.map(p => p.category))];

  const filtered = selectedCategory === "todas"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "descuento") return (b.discount || 0) - (a.discount || 0);
    if (sortBy === "precio-asc") {
      const pa = a.precioOriginal ? Math.round(a.precioOriginal * (1 - a.discount / 100)) : a.price;
      const pb = b.precioOriginal ? Math.round(b.precioOriginal * (1 - b.discount / 100)) : b.price;
      return pa - pb;
    }
    if (sortBy === "precio-desc") {
      const pa = a.precioOriginal ? Math.round(a.precioOriginal * (1 - a.discount / 100)) : a.price;
      const pb = b.precioOriginal ? Math.round(b.precioOriginal * (1 - b.discount / 100)) : b.price;
      return pb - pa;
    }
    return 0;
  });

  return (
    <>
      <Header />

      <div className="offers-hero">
        <div className="offers-hero-content">
          <h1>🔥 Ofertas</h1>
          <p>Descuentos exclusivos en tecnología gamer</p>
          <span className="offers-count">{products.length} producto{products.length !== 1 ? "s" : ""} en oferta</span>
        </div>
      </div>

      <main className="offers-page">
        {/* Filtros */}
        <div className="offers-filters">
          <div className="filter-group">
            <span className="filter-label">Categoría:</span>
            <div className="filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Ordenar por:</span>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
              <option value="descuento">Mayor descuento</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        {/* Resultados */}
        <section className="offers-results">
          {sorted.length === 0 ? (
            <div className="offers-empty">
              <span>😕</span>
              <p>No hay ofertas en esta categoría por ahora.</p>
            </div>
          ) : (
            <ProductList products={sorted} />
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Ofertas;