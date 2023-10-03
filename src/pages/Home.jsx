import React from 'react'
import Navbar from '../Commponents/Navbar'
import CategoryMenu from '../Commponents/CategoryMenu'
import Fooditems from '../Commponents/Fooditems'
import Cart from '../Commponents/Cart'

const Home = () => {
  return (
    <>
    <Navbar/>
    <CategoryMenu/>
    <Fooditems/>
     <Cart/>
    </>
  )
}

export default Home
