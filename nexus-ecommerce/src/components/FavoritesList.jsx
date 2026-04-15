function FavoritesList({ favorites, toggleWishlist }) {
  return (
    <section className="panel">
      <h3 className="panel__title">Favorited Items</h3>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="mini-grid">
          {favorites.map((item) => (
            <div key={item.id} className="mini-card">
              <strong>{item.name}</strong>
              <p className="mini-card__price">${item.price}</p>
              <button className="button button--ghost" onClick={() => toggleWishlist(item)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritesList;
