import "./ProductCard.css";

function ProductCard({ product }) {
  const precioFinal = product.precioOriginal && product.discount
    ? Math.round(product.precioOriginal * (1 - product.discount / 100))
    : product.price;

  return (
    <div className="card">
      {product.discount && (
        <div className="badge-descuento">-{product.discount}%</div>
      )}

      <div className="card-img-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <h2>{product.name}</h2>

      {product.discount ? (
        <p>
          <span className="precio-original">${product.precioOriginal}</span>
          <span className="precio-descuento">${precioFinal}</span>
        </p>
      ) : (
        <p>${product.price}</p>
      )}

      <button>Comprar</button>
    </div>
  );
}

export default ProductCard;
