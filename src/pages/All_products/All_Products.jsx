import React from 'react'
import './all_products.css'
import Header from '../../components/Header'
import SwiperCard from '../../components/SwiperCard'
import Footer from '../../components/Footer'
import Products from '../../components/Products'
import Cards from '../../components/Cards'
import Search_part from '../../components/Search_part'
export default function All_Products() {
  return (
    <div className='all_products'>
     <Header/>
     <Search_part/>
     <Products/>
     <Cards/>
     <Footer/>
    </div>
  )
}
