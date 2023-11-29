import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const OrderDonePage = () => {
  const navigate = useNavigate();

  const handleMainMenuClick = () => {
    // Redirigir a la página principal
    navigate('/mainmenu');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">¡Su pedido ha sido realizado!</h1>
        <p className="text-lg">Gracias por su compra.</p>
        <Link to="/mainmenu" className="block mt-4">
          <button
            className="bg-azp text-azf font-semibold px-4 py-2 rounded hover:bg-azt hover:text-azp hover:font-semibold"
          >
            Ir al Menú Principal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderDonePage;
