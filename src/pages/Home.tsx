import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/products');
  };

  return (
    <div className="jumbotron">
      <h1 className="display-4">Bienvenido a Mi Tienda</h1>
      <p className="lead">La mejor tienda en línea para comprar tus productos favoritos.</p>
      <hr className="my-4" />
      <p>¡No esperes más y comienza a comprar ahora!</p>
      <button className="btn btn-primary btn-lg" onClick={handleRedirect}>
        Ver Productos
      </button>
    </div>
  );
};

export default Home;
