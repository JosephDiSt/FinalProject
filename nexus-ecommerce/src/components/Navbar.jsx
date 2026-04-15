function Navbar({
  totalItems,
  setCategoryFilter,
  setSortOrder,
  setPromoInput,
  applyPromo,
  finalPrice
}) {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <p className="navbar__label">Nexus</p>
        <h2>Nexus Store</h2>
      </div>

      <div className="navbar__summary">
        <p>🛒 {totalItems} items</p>
        <p>${finalPrice.toFixed(2)}</p>
      </div>

      <div className="navbar__controls">
        <select
          className="navbar__field"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>

        <select
          className="navbar__field"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        <input
          className="navbar__field"
          placeholder="Promo"
          onChange={(e) => setPromoInput(e.target.value)}
        />
        <button className="button button--primary" onClick={applyPromo}>
          Apply
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
