import React, { useState, useEffect } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const OrdersPage = () => {
  const [ordenes, setOrdenes] = useState([]);


  useEffect(() => {
    getOrderData();
  }, []);

  const getUserId = () => {
    var data = localStorage.getItem('customer');
    console.log(data);
    var id = JSON.parse(data).id;
    console.log(id);
    return id;
  }

  const getOrderData = () => {
    var id=getUserId();
    axios.get(`http://localhost:8000/salesApp/orders/${id}`)
    .then(response => {
      setOrdenes(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching orders:', error);
    })
  }


  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-azp'>
        <Link to="/mainmenu" className="main-menu-link absolute left-4 top-4 bg-azs text-azf font-semibold py-1 px-2 rounded-md border-2 border-azs hover:bg-azt hover:text-azp hover:font-semibold">
            Main Menu
        </Link>
      <h1 className='mb-10 text-3xl font-semibold text-azf'>abc Electronics</h1>
      <div className='border-2 border-azblue rounded-lg w-1/2 h-2/3 flex flex-col justify-center items-center bg-azf'>
        <ul className="orders-list">
          {ordenes.map((orden, index) => (
            <li key={index} className="order-item mb-5">
              <p className="order-info">
                <span className="font-semibold">Orden #{index + 1}</span>
                <ul>
                  <li>Fecha de orden: {orden.order_date}</li>
                  <li>Fecha de envío: {orden.shipped_date}</li>
                  <li>Fecha de pago: {orden.payment_date}</li>
                  <li>Producto: {orden.product}</li>
                  <li>Precio: {orden.price}$</li>
                </ul>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrdersPage;
