import React from 'react'
import NavBar from '../components/NavBar'
import NavCategory from '../components/NavCategory'
import Carousel from '../components/Carousel'
import ProductList from '../components/ProductList'

const MenuPage = () => {
  return (
    <>
    <NavBar></NavBar>
    <NavCategory></NavCategory>
    <Carousel></Carousel>
    <ProductList></ProductList>
    </>
  )
}

export default MenuPage