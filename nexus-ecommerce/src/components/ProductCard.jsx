function ProductCard({
  product,
  addToCart,
  openModal,
  toggleWishlist,
  isWishlisted
}) {
  return (
    <article className="product-card">
      <div className="product-card__content">
        <p className="product-card__category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-card__price">${product.price}</p>
        <p className="product-card__stock">Stock: {product.stock}</p>
      </div>

      <div className="product-card__actions">
        <button className="button button--secondary" onClick={() => openModal(product)}>
          Quick View
        </button>

        <button className="button button--ghost" onClick={() => toggleWishlist(product)}>
          {isWishlisted ? "❤️ Favorited" : "♡ Wishlist"}
        </button>

        {product.stock === 0 ? (
          <button className="button button--disabled" disabled>
            Out of Stock
          </button>
        ) : (
          <button className="button button--primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
