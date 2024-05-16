import React from "react";
import Commenter from '../assets/comment.png'
export default function Comments() {
  return (
    <div className="comments">
      <div className="comments_child-1">
        <div>
          <span>
            <img src={Commenter} alt="gardener" />
          </span>
          <span>
            <p>Carla Samantoes-Diego</p>
            <p>12.09.2021</p>
          </span>
        </div>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star-half-stroke"></i>
        </div>
      </div>
      <div className="comments_child-2">
        <p>
          SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional
          instructions created by PhD Helga George Be sure of our quality - the
          freshest batches of this season. Non-GMO, Heirloom - our seeds were
          tested and have the best germination ratings.
        </p>
      </div>
    </div>
  );
}
