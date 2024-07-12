import React from 'react';
import { useCart } from './CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Carrito de Compras</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              cart.map((product) => (
                <div key={product.id} className="mb-3">
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <p>Precio: ${product.price}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(product)}>
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
