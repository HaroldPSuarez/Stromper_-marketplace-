import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../services/api";
import "./Products.css";

const predefinedCategories = [
  { name: "Celulares", icon: "📱" },
  { name: "Computadores", icon: "💻" },
  { name: "Tablets", icon: "📲" },
  { name: "Accesorios", icon: "🖱️" },
  { name: "Monitores", icon: "🖥️" },
  { name: "Audio", icon: "🎧" },
  { name: "Consolas", icon: "🎮" },
  { name: "Wearables", icon: "⌚" },
];

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  const filtered = products.filter(p => {
    const matchCat = selectedCategory === "todos" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Header />

      <div className="products-hero">
        <h1>Productos</h1>
        <p>Explora todo nuestro catálogo de tecnología</p>
      </div>

      <main className="products-page">
        <aside className="products-sidebar">
          <h3>Categorías</h3>
          <button
            onClick={() => setSelectedCategory("todos")}
            className={selectedCategory === "todos" ? "active" : ""}
          >
            🛍️ Todos
          </button>
          {predefinedCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={selectedCategory === cat.name ? "active" : ""}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </aside>

        <section className="products-content">
          <div className="products-content-header">
            <h2>
              {selectedCategory === "todos" ? "Todos los productos" : selectedCategory}
            </h2>
            <span className="products-count">{filtered.length} resultado{filtered.length !== 1 ? "s" : ""}</span>
          </div>

          <input
            type="text"
            placeholder="🔍 Buscar en esta categoría..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "10px",
              border: "1.5px solid #ddd",
              marginBottom: "20px",
              fontSize: "0.95rem",
              outline: "none"
            }}
          />

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px", color: "#888" }}>
              <p style={{ fontSize: "2rem" }}>😕</p>
              <p style={{ marginTop: "12px" }}>No se encontraron productos.</p>
            </div>
          ) : (
            <ProductList products={filtered} />
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Products;