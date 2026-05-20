import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>${product.price}</p>

      <button>Comprar</button>
    </div>
  );
}

export default ProductCard;
