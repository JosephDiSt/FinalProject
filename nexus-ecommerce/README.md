# 🛒 Nexus E-Commerce Suite

## 📌 Overview
The Nexus E-Commerce Suite is a React-based web application that simulates a real-world online shopping experience. Users can browse products, filter and sort items, manage a shopping cart, and interact with a live inventory system.

This project demonstrates key front-end development concepts such as state management, component architecture, conditional rendering, and persistent storage.

---

## 🎯 Project Objectives
- Build a functional e-commerce interface using React
- Implement global state management for a shopping cart
- Apply filtering and sorting logic
- Simulate inventory tracking
- Enhance user experience with responsive design

---

## 🚀 Features

### Core Features
- Global shopping cart (managed in `App.jsx`)
- Real-time total items and total price updates
- Add/remove items from cart
- Inventory system with stock tracking
- "Out of Stock" conditional rendering

### Filtering & Sorting
- Filter products by category
- Sort by price (Low → High, High → Low)
- Combined filtering and sorting functionality

### Product Quick View
- Modal popup displaying:
  - Product details
  - Price
  - Description
  - Stock availability

---

## 🌟 Advanced Features

### Promo Codes
- Discount code support (`OAKLAND20` for 20% off)

### Wishlist
- Add/remove favorite items
- Data persists using `localStorage`

---

## 🧱 Technologies Used
- React (Vite)
- JavaScript (ES6)
- CSS (Flexbox & Grid)
- localStorage

---

## 🏗️ Component Structure

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── data/
│   └── data.js
├── components/
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── Modal.jsx
│   ├── CartList.jsx
│   └── FavoritesList.jsx
└── assets/
    ├── hero.png
    ├── react.svg
    └── vite.svg
```

---

## ⚙️ Installation Instructions

1. Clone the repository:
```bash
git clone https://github.com/your-username/nexusecommerce.git
```

2. Navigate into the folder:
```bash
cd nexusecommerce
```

3. Install dependencies:
```bash
npm install
```

4. Run the app:
```bash
npm run dev
```

5. Open:
```text
http://localhost:5173
```

---

## 🧠 Technical Implementation

- **State Management:** Cart and wishlist handled using `useState` in `App.jsx`
- **Inventory Logic:** Stock decreases when items are added and increases when removed from cart
- **Filtering & Sorting:** Implemented using array methods (`.filter` and `.sort`)
- **Persistence:** Wishlist stored using `localStorage` and synced with `useEffect`
- **Conditional Rendering:** Used for stock status, modal visibility, and UI updates

---

## ⚠️ Challenges Faced

### Cart Synchronization
Keeping cart data consistent across components  
**Solution:** Lifted state to `App.jsx`

### Inventory Control
Preventing users from adding unavailable items  
**Solution:** Disabled button when stock reaches zero

### Data Persistence
Maintaining wishlist after refresh  
**Solution:** `localStorage` with `useEffect`

---

## 🎨 UI/UX Design
- Mobile-first responsive design
- Clean layout using Flexbox and Grid
- Interactive elements (buttons, modal, hover effects)

---

## 📹 Demo Video
A 2-minute demo video demonstrates:
- Cart functionality
- Filtering and sorting
- Promo code usage
- Wishlist persistence

---

## 🔗 Deliverables
- GitHub Repository: (Add your link)
- Live Deployment: (Add your link)
- Demo Video: (Add your link)

---

## 👤 Author
Joseph DiStefano  
Macomb, MI  
jcd23231@gmail.com  
https://github.com/JosephDiSt

---

## ✅ Status
✔ Completed  
✔ Functional  
✔ Meets Requirements  
✔ Ready for Submission
