import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
  isInCart: boolean; // Nuevo prop para indicar si el producto está en el carrito
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
  const [inCart, setInCart] = useState(isInCart);

  useEffect(() => {
    setInCart(isInCart);
  }, [isInCart]);

  const handleAddToCart = () => {
    if (!inCart) {
      onAddToCart(product);
      setInCart(true);
    } else {
      onRemoveFromCart(product);
      setInCart(false);
    }
  };

  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Precio: ${product.price}</p>
        {inCart ? (
          <button className="btn btn-danger" onClick={handleAddToCart}>
            En el Carrito
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Añadir al Carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
