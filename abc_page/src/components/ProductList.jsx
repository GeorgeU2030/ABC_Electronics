import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axios.get(`http://localhost:8000/salesApp/products/${selectedCategory}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [selectedCategory]);

  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4 mt-10">
      {products.map(product => (
        <div key={product.id} className="w-full p-4">
          <ProductCard product={product} key={product.id} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
