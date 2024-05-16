import React, { useState } from "react";
import Seeds2 from '../assets/seeds-2.png'
import Small_image1 from '../assets/image 2.png'
import Small_image2 from '../assets/image 3.png'
import Small_image3 from '../assets/image 4.png'
import Small_image4 from '../assets/image 5.png'
import Small_image5 from '../assets/image 6.png'
import Small_image6 from '../assets/image 7.png'
import Potato from '../assets/potato.png'
export default function FirstRow() {
  const [text, setText] = useState("Main / Catoloug / Vegetables/ Cucumber /");
  const ChangerW = () => {
    if (window.screen.availWidth < 1024) {
      setText("SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting");
    }
  };
  return (
    <div className="first_row">

      <div className="row_1-child-1">
        <p onMouseEnter={() => ChangerW()}>
          {text} <span>Seedra cucumber</span>
        </p>
      </div>

      <div className="row_1-child-2">

        <div className="Row_1_child2-1">

          <div>
               <img src={Seeds2} alt="seeds" />
          </div>

          <div>
           <img src={Small_image1} alt="image1" />
           <img src={Small_image2} alt="image2" />
           <img src={Small_image3} alt="image3" />
           <img src={Small_image4} alt="image4" />
           <img src={Small_image5} alt="image5" />
           <img src={Small_image6} alt="image6" />
          </div>

        </div>

        <div className="Row_1_child2-2">
          <div className="R1_Ch2_2-1">
          <h1>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</h1>
          <span>
               <p><i className="fa-solid fa-check"></i>Available</p>
               <p><img src={Potato} alt="potatoe" />Vegetables</p>
          </span>
          </div>

          <div className="R1_Ch2_2-2">
           <span className="span-1">
               <span>
                    <p>size</p>
                    <p>2 pack</p>
               </span>
               <span>
                   <i className="fa-solid fa-minus"></i>
                   <p>2</p>
                   <i className="fa-solid fa-plus"></i>
               </span>
           </span>
           <span className="span-2">
               <span>
                   <input type="radio" id="product1" />
                    <label htmlFor="product1">1 pack</label>
               </span>
               <span>
               <p>start from</p>
               <p>$1,56</p>
               </span>
           </span>
           <span className="span-2">
               <span>
                   <input type="radio" id="product2" />
                    <label htmlFor="product2">2 pack</label>
               </span>
               <span>
               <p>start from</p>
               <p>$1,56</p>
               </span>
           </span>
           <span className="span-2">
               <span>
                   <input type="radio" id="product3" />
                    <label htmlFor="product3">3 pack</label>
               </span>
               <span>
               <p>start from</p>
               <p>$1,56</p>
               </span>
           </span>
           <span className="span-2">
               <span>
                   <input type="radio" id="product4" />
                    <label htmlFor="product4">4 pack</label>
               </span>
               <span>
               <p>start from</p>
               <p>$1,56</p>
               </span>
           </span>
           <span className="span-2">
               <span>
                   <input type="radio" id="product5" />
                    <label htmlFor="product5">5 pack</label>
               </span>
               <span>
               <p>start from</p>
               <p>$1,56</p>
               </span>
           </span>
           
          </div>

          <div className="R1_Ch2_2-3">
          <span>
          
          </span>
          </div>
        </div>
         
      </div>
    </div>
  );
}
