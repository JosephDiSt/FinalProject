function Modal({ product, close, addToCart }) {
  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>X</button>

        <h2>{product.name}</h2>
        <p className="product-card__price">${product.price}</p>
        <p>{product.description}</p>

        {product.stock === 0 ? (
          <button className="button button--disabled" disabled>Out of Stock</button>
        ) : (
          <button className="button button--primary" onClick={() => {
            addToCart(product);
            close();
          }}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;
