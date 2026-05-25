import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../services/api";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const predefinedCategories = [
    "Celulares",
    "Computadores",
    "Tablets",
    "Accesorios",
    "Monitores",
    "Audio",
    "Consolas",
    "Wearables",
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Header />

      <main className="products-page">
        <aside className="products-sidebar">
          <h3>Categorías</h3>
          <button
            onClick={() => setSelectedCategory("todos")}
            className={selectedCategory === "todos" ? "active" : ""}
          >
            Todos
          </button>
          {predefinedCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </aside>

        <section className="products-content">
          <h1>Productos</h1>
          <p>Explora todos nuestros productos disponibles en la tienda.</p>
          <ProductList products={filteredProducts} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Products;
