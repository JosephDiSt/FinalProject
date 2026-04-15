import { useEffect, useState } from "react";
import "./App.css";
import productsData from "./data/data";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import FavoritesList from "./components/FavoritesList";
import CartList from "./components/CartList";

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoInput, setPromoInput] = useState("");
  const [message, setMessage] = useState("");
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    if (product.stock === 0) return;

    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, stock: p.stock - 1 } : p
    );

    setProducts(updatedProducts);
    setCart([...cart, product]);
    setMessage("Added to cart!");
    setTimeout(() => setMessage(""), 2000);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    const [removedItem] = updatedCart.splice(index, 1);

    if (removedItem) {
      setProducts(
        products.map((product) =>
          product.id === removedItem.id
            ? { ...product, stock: product.stock + 1 }
            : product
        )
      );
    }

    setCart(updatedCart);
  };

  const applyPromo = () => {
    if (promoInput === "OAKLAND20") {
      setDiscount(0.2);
    } else {
      alert("Invalid code");
    }
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const finalPrice = totalPrice * (1 - discount);
  const filteredProducts = products
    .filter((p) =>
      categoryFilter === "All" ? true : p.category === categoryFilter
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="app-shell">
      <Navbar
        totalItems={totalItems}
        setCategoryFilter={setCategoryFilter}
        setSortOrder={setSortOrder}
        setPromoInput={setPromoInput}
        applyPromo={applyPromo}
        finalPrice={finalPrice}
      />

      <main className="app-main">
        <section className="hero-banner">
          <div>
            <p className="eyebrow">Modern ecommerce demo</p>
            <h1>Nexus Store</h1>
            <p className="hero-copy">
              Browse products, save favorites, manage your cart, and test promo
              discounts in a polished responsive storefront.
            </p>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span>Items in cart</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="stat-card">
              <span>Favorites</span>
              <strong>{wishlist.length}</strong>
            </div>
          </div>
        </section>

        {message && <p className="status-message">{message}</p>}

        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
          openModal={setSelectedProduct}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />

        <div className="support-grid">
          <CartList cart={cart} removeFromCart={removeFromCart} />
          <FavoritesList favorites={wishlist} toggleWishlist={toggleWishlist} />
        </div>
      </main>

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          close={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
