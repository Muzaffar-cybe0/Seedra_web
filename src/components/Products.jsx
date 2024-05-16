import React from 'react'
import Barg_1 from '../assets/barg-1.png'
import Barg_2 from '../assets/barg-2.png'
import List from '../assets/list.png'
import Potato from '../assets/potato.png'
import Strawberry from '../assets/strawberry.png'
import GardenTool from '../assets/gardening tool.png'
import Flower from '../assets/Flower.png'

export default function Products() {
  return (
    <div className='products'>

     <div className="products-1">

       <div className="product_1-1">
          <p>Our Products</p>
          <button type="button">View all(12)</button>
       </div>

       <div className="product_1-2">
          <button type="button">
               <img src={Barg_1} alt="barg" />
               All
          </button>
          <button type="button">
               <img src={List} alt="list" />
               bundles
          </button>
          <button type="button">
               <img src={Barg_2} alt="barg-2" />
               herbs
          </button>
          <button type="button">
               <img src={Potato} alt="potato" />
              vegatables
          </button>
          <button type="button">
               <img src={Strawberry} alt="strawberry" />
               Fruits
          </button>
          <button type="button">
               <img src={GardenTool} alt="gardenTool" />
               supplies
          </button>
          <button type="button">
               <img src={Flower} alt="flower" />
              flowers
          </button>
       </div>

     </div>
     

    </div>
  )
}
