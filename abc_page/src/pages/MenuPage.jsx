import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import NavCategory from '../components/NavCategory'
import Carousel from '../components/Carousel'
import ProductList from '../components/ProductList'

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryChange = (categoryNumber) => {
    setSelectedCategory(categoryNumber);
  };

  return (
    <>
    <NavBar></NavBar>
    <NavCategory onCategoryChange={handleCategoryChange}></NavCategory>
    <Carousel></Carousel>
    <ProductList selectedCategory={selectedCategory}></ProductList>
    </>
  )
}

export default MenuPage