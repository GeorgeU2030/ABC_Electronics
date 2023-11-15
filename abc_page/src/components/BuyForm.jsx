import React, {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const BuyForm = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const idstring = params.id;
        const idlong = parseInt(idstring, 10);
        axios.get(`http://localhost:8000/salesApp/product/${idlong}`)
          .then(response => {
            setProduct(Array.isArray(response.data) ? response.data[0] : response.data);
            console.log('Producto cargado:', response.data);
          })
          .catch(error => {
            console.error('Error al cargar el producto:', error);
          });
      }
    }
    loadProduct();
  }, [params.id]);  
  

  return (
    <div className='flex bg-azf w-screen h-[85vh]' >
        
        {product && (
        <>
          <section className='w-1/2 flex flex-col items-center justify-center '>
            <img src={config.API_BASE_URL+product.photo} className='w-72 h-80'/>
            <h2 className='text-black font-semibold text-2xl mt-4'>{product.description}</h2>
          </section>

          <section className='w-1/2 flex flex-col items-center'>
            
          </section>
        </>
        )}
    </div>
  )
}

export default BuyForm