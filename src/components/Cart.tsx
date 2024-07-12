import React from 'react';
import { useCart } from '../context/CartContext';  // Importa el hook del contexto del carrito

const Cart: React.FC = () => {
  const { cart } = useCart();  // Obtiene el estado del carrito del contexto

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
