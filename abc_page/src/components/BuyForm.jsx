import React, {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import axios from 'axios';
import config from '../../config';

const BuyForm = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [units, setUnit] = useState(1)
  const [totalpay, setTotalPay] = useState(0)
  const [discount, setDiscount] = useState(1)

  const getUserId = () => {
    var data = localStorage.getItem('customer');
    console.log(data);
    var id = JSON.parse(data).id;
    console.log(id);
    return id;
  }


  const increaseamount = () => {
    setUnit(units+1)
  }
  const decreaseamount = () => {
    if(units>1){
    setUnit(units-1)
    }
  }

  const gotoAddInfo = () => {
    navigate('/addinfo')
  }

  useEffect(() => {
      async function loadProduct() {
        if (params.id) {
          const idstring = params.id;
          const idlong = parseInt(idstring, 10);
          try {
            const response = await axios.get(`http://localhost:8000/salesApp/product/${idlong}`);
            const loadedProduct = Array.isArray(response.data) ? response.data[0] : response.data;
    
            setProduct(loadedProduct);
    
            if (loadedProduct) {
              const calculatedTotalPay = loadedProduct.selling_price * units;
              setTotalPay(calculatedTotalPay.toFixed(2));
            }
          } catch (error) {
            console.error('Error al cargar el producto:', error);
          }
        }
      }
    
      loadProduct();
    }, [params.id, units]); 

  
    const handleBuyClick = async () => {
      const id2 = getUserId();
      try {
        const response = await axios.post('http://localhost:8000/salesApp/createorder/', {
          customer_id: id2,
          productId: parseInt(product.id,10),
          quantity: parseInt(units,10),
          totalPay: parseFloat(totalpay),
        });
  
        if (response.data.message === 'Orden creada correctamente') {
          navigate('/placedorder');
        } else {
          console.error('Error al crear la orden');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

  return (
    <div className='flex bg-azf w-screen h-[85vh]' >
        
        {product && (
        <>
          <section className='w-1/2 flex flex-col items-center justify-center '>
            <img src={config.API_BASE_URL+product.photo} className='w-72 h-80'/>
            <h2 className='text-black font-semibold text-2xl mt-4'>{product.description}</h2>
          </section>

          <section className='w-1/2 flex flex-col items-center justify-center'>
            <img src='../src/images/logovisa.png' className='w-40 h-24'/>
            <div className='flex'>
              <label className='font-semibold text-2xl text-azp mt-6'>Unidades: {units}</label>
            </div>
            <div className='flex mt-6'>
              <button className='flex items-center bg-azp text-azf py-1 px-6 rounded-lg'
              onClick={increaseamount}>
              <IoMdAddCircle />
              <h3 className='ml-2 font-semibold'>Agregar</h3>
              </button>
              <button className='flex items-center bg-azs text-azf py-1 px-8 rounded-lg ml-2'
              onClick={decreaseamount}>
              <FaMinusCircle />
              <h3 className='ml-2 font-semibold'>Quitar</h3>
              </button>
            </div>

            <div className='mt-3'>
              <button className='bg-butcol rounded-lg text-azf font-semibold py-2 px-3  mt-5'
              onClick={gotoAddInfo}>
                Obten un 10% de Descuento
              </button>
            </div>
            <div className='flex bg-azt text-azp font-semibold mt-4 w-1/2 h-12 rounded-lg items-center'>
              <label className='ml-5'>Total a Pagar</label>
              <label className='ml-20 text-xl'>$ {totalpay}</label>
            </div>
            <div className='mt-3'>
            <button
                className='bg-butcol rounded-lg text-azf text-lg font-semibold py-3 px-4  mt-5'
                onClick={handleBuyClick}
              >
                Comprar
              </button> 
            </div>
          </section>
        </>
        )}
    </div>
  )
}

export default BuyForm
