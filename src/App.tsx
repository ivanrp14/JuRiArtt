import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import CartModal from './context/CartModal';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <CartProvider>
      <Router>
        <Navbar onCartClick={handleCartOpen} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <CartModal isOpen={isCartOpen} onClose={handleCartClose} />
      </Router>
    </CartProvider>
  );
};

export default App;
