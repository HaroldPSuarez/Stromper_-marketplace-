import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";

import { getProducts } from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();

    setProducts(data);
  }

  return (
    <>
      <Header />

      <ProductList products={products} />

      <Footer />
    </>
  );
}

export default Home;
