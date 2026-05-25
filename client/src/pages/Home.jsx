import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  const ofertas = products.filter(p => p.descuento && p.descuento > 0);

  const banners = [
    {
      title: "🎉 En tu primera compra te regalamos $20.000",
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

  const prevBanner = () => {
    setCurrentBanner((c) => (c - 1 + banners.length) % banners.length);
  };

  const nextBanner = () => {
    setCurrentBanner((c) => (c + 1) % banners.length);
  };

  return (
    <>
      <Header />

      {/* Hero gamer */}
      <div className="home-hero">
        <div className="hero-text">
          <h1>Bienvenido a STROMPER</h1>
          <p>Explora lo último en tecnología ⚡</p>
          <button className="btn-hero">Ver ofertas</button>
        </div>
      </div>

      {/* Banners horizontales grandes */}
      <section className="home-section">
        <div className="banner-slider-container">
          <button className="banner-btn left" onClick={prevBanner}>◀</button>
          <div className="banner-slider">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`banner-slide ${index === currentBanner ? "active" : ""}`}
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                <div className="banner-text">
                  <h3>{banner.title}</h3>
                  <p>{banner.text}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="banner-btn right" onClick={nextBanner}>▶</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
