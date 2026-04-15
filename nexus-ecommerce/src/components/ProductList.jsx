import ProductCard from "./ProductCard";

function ProductList({
  products,
  addToCart,
  openModal,
  toggleWishlist,
  wishlist
}) {
  return (
    <section className="catalog-section">
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">Catalog</p>
          <h3>Featured Products</h3>
        </div>
      </div>
      <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          openModal={openModal}
          toggleWishlist={toggleWishlist}
          isWishlisted={wishlist.some((item) => item.id === product.id)}
        />
      ))}
      </div>
    </section>
  );
}

export default ProductList;
