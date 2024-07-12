import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext'; // Importa el hook del contexto del carrito

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const { addToCart, removeFromCart, cart } = useCart(); // Obtiene funciones y estado del carrito del contexto

  // Ejemplo de definición de productos
  const products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      price: 100,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      price: 200,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del Producto 3',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const isProductInCart = (productId: number) => {
    return cart.some((product) => product.id === productId);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (product: Product) => {
    removeFromCart(product);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              isInCart={isProductInCart(product.id)} // Pasa el estado isInCart a ProductCard
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
