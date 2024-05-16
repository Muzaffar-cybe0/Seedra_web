import React from "react";
import User from "../assets/comment.png";
import Seeds_result from '../assets/Rectangle2.png'
export default function Customer_Reviews() {
  return (
    <div className="Customer_Reviews">
      <div className="Customer_BIG_CHILD-1">
        <p>Customer reviews</p>
        <button type="button">Make review</button>
      </div>

      <div className="Customer_BIG_CHILD-2">

        <div className="customerR_child-1">
          <div className="customR_child1_1">
            <div className="customR_child1_1_div1">
              <h1>4,1</h1>
              <span>
                <p>124 views</p>
                <p>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>
                </p>
              </span>
            </div>

            <div className="customR_child1_1_div2">
              <span>
                <p>
                  <p>5</p>
                  <i className="fa-solid fa-star"></i>
                </p>
                <div>
                  <div></div>
                </div>
                <p>81</p>
              </span>

              <span>
                <p>
                  <p>4</p>
                  <i className="fa-solid fa-star"></i>
                </p>
                <div>
                  <div></div>
                </div>
                <p>45</p>
              </span>

              <span>
                <p>
                  <p>3</p>
                  <i className="fa-solid fa-star"></i>
                </p>
                <div>
                  <div></div>
                </div>
                <p>32</p>
              </span>

              <span>
                <p>
                  <p>2</p>
                  <i className="fa-solid fa-star"></i>
                </p>
                <div>
                  <div></div>
                </div>
                <p>1</p>
              </span>

              <span>
                <p>
                  <p>1</p>
                  <i className="fa-solid fa-star"></i>
                </p>
                <div>
                  <div></div>
                </div>
                <p>1</p>
              </span>
            </div>
          </div>

          <div className="customR_child1_2">
            <div className="customR_child1_2_div1">
              <div>
                <img src={User} alt="user" />
                <div>
                  <p>Carla Samantoes-Diego</p>
                  <p>Reviewed in the United States on June 18, 2021</p>
                </div>
              </div>

              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>

            <div className="customR_child1_2_div2">
              <p>
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George <br /> Be
                sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings.
              </p>
            </div>

            <div className="customR_child1_2_div3">
              <span>
                <p>Size</p>
                <p>2 Pack</p>
              </span>

              <span>
                <i className="fa-solid fa-check"></i>
                <p>verified</p>
              </span>
            </div>
          </div>
        </div>

        <div className="customerR_child-2">
          <div className="customR_child2_1">
            <div className="customR_child2_1_div1">
              <span>
                <p>124 views</p>
                <p>Photo&Video review</p>
              </span>
              <button type="button">View</button>
            </div>

            <div className="customR_child2_1_div2">
               <img src={Seeds_result} alt="seeds" />
               <img src={Seeds_result} alt="seeds" />
               <img src={Seeds_result} alt="seeds" />
               <img src={Seeds_result} alt="seeds" />
            </div>

          </div>

          <div className="customR_child2_2">
            <div className="customR_child2_2_div1">
              <div>
                <img src={User} alt="user" />
                <div>
                  <p>Carla Samantoes-Diego</p>
                  <p>Reviewed in the United States on June 18, 2021</p>
                </div>
              </div>

              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>

            <div className="customR_child2_2_div2">
              <p>
              Eine sehr aromatische Sorte, wollte die Himbeere gerade noch einmal bestellen, derzeit nicht verfügbar. So süße Früchte und das jetzt im Oktober, unglaublich
              </p>
              <div>
               <img src={Seeds_result} alt="seeds" />
               <img src={Seeds_result} alt="seeds" />
              </div>
            </div>

            <div className="customR_child2_2_div3">
              <span>
                <p>Size</p>
                <p>2 Pack</p>
              </span>

              <span>
                <i className="fa-solid fa-check"></i>
                <p>verified</p>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
