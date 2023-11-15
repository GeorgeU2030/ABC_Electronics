import React from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../config';
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({product}) => {

    const navigate = useNavigate()

    return (
        <div 
            className='flex flex-col rounded-lg border-2 border-azp bg-azf overflow-hidden items-center'
            >
            <img src={config.API_BASE_URL+product.photo} className='w-4/5 h-52'/>
            <h2 className='font-semibold mt-2'>{product.description}</h2>
            <h2 className='font-semibold mt-2 text-azp text-lg'>$ {product.selling_price}</h2>
            <button className='border-2 border-azs px-6 flex items-center rounded-lg mt-1 mb-1'
             onClick={()=>{
                navigate('/product/'+product.id)
            }
            }
            >
            <FaShoppingCart className='mt-2 text-azp text-2xl'/>
            <h3 className='ml-4 text-azp font-semibold'>Comprar</h3>
            </button>
        </div>
    )
}

export default ProductCard