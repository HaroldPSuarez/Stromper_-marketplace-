import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  const ofertas = products.filter(p => p.discount && p.discount > 0);

  const banners = [
    {
      title: "🎉 Primera compra: $20.000 de regalo",
      text: "Cupón SOYNUEVO + envío gratis",
      image: "/Imagenes/Banner3.png"
    },
    {
      title: "🔥 Semana RGB",
      text: "Descuentos especiales en periféricos gamer",
      image: "/Imagenes/Banner2.png"
    },
    {
      title: "⚡ Ofertas Gamer",
      text: "Hasta 40% menos en laptops y monitores",
      image: "/Imagenes/Banner1.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((c) => (c + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const categories = [
    { name: "Celulares", icon: "📱" },
    { name: "Computadores", icon: "💻" },
    { name: "Monitores", icon: "🖥️" },
    { name: "Audio", icon: "🎧" },
    { name: "Accesorios", icon: "🖱️" },
    { name: "Consolas", icon: "🎮" },
    { name: "Tablets", icon: "📲" },
    { name: "Wearables", icon: "⌚" },
  ];

  return (
    <>
      <Header />

      {/* BANNER CARRUSEL PRINCIPAL */}
      <section className="home-slider">
        <div className="slider-track">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`slider-slide ${index === currentBanner ? "active" : ""}`}
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="slider-overlay" />
              <div className="slider-content">
                <h1>{banner.title}</h1>
                <p>{banner.text}</p>
                <button className="slider-btn" onClick={() => navigate("/ofertas")}>
                  Ver ofertas →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {banners.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentBanner ? "active" : ""}`}
              onClick={() => setCurrentBanner(i)}
            />
          ))}
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="home-section">
        <div className="section-header">
          <h2>Explora por categoría</h2>
          <button className="link-btn" onClick={() => navigate("/productos")}>Ver todo →</button>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="category-chip"
              onClick={() => navigate("/productos")}
            >
              <span className="chip-icon">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* OFERTAS DESTACADAS */}
      {ofertas.length > 0 && (
        <section className="home-section home-offers">
          <div className="section-header">
            <h2>🔥 Ofertas destacadas</h2>
            <button className="link-btn" onClick={() => navigate("/ofertas")}>Ver todas →</button>
          </div>
          <div className="offers-scroll">
            {ofertas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* BANNER PROMO */}
      <section className="home-promo">
        <div className="promo-content">
          <h2>¿Primera vez en STROMPER?</h2>
          <p>Crea tu cuenta y recibe <strong>$20.000</strong> en tu primera compra + envío gratis</p>
          <button className="promo-btn" onClick={() => navigate("/contacto")}>Regístrate gratis</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;