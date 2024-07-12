import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Mi Tienda</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/products" className="nav-link">Productos</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/profile" className="nav-link">Tu Perfil</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contáctanos</Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-secondary" onClick={onCartClick}>
              Ver Carrito
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
