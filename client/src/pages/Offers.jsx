import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../services/api";

function Ofertas() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data.filter(p => p.discount && p.discount > 0));
  }

  return (
    <>
      <Header />

      <main className="products-page">
        <section className="products-content">
          <h1>🔥 Ofertas</h1>
          <p>Aprovecha descuentos exclusivos en tecnología gamer ⚡</p>
          <ProductList products={products} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Ofertas;
