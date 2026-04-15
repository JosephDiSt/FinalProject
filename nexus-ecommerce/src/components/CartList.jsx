function CartList({ cart, removeFromCart }) {
  return (
    <section className="panel">
      <h3 className="panel__title">Cart Items</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-row">
              <div>
                <strong>{item.name}</strong>
                <p className="mini-card__price">${item.price}</p>
              </div>
              <button className="button button--ghost" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CartList;
