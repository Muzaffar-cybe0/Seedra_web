import fire from '../assets/fire.png'

import '../Scss/AdContainer.css/adcontainer.css'
export default function ADContainer() {
  return (
     <div className="AD_container">
     <div className="AD_child-1">
          <div className='ad_child_1-1'>
               <p>SEEDRA Basil Seeds for Indoor and Outdoor Planting</p>
               <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>
          </div>
          <div className='ad_child_1-2'>
               <div>
                    <img src={fire} alt="fire" />
                    <p className='price_1'>$12.56</p>
                    <p className='price_2'>$15.56</p>
               </div>
               <div>
                    <button type="button">Add to card</button>
                    <button type="button">Discover</button>
               </div>
          </div>
     </div>
     
     </div>
  )
}
