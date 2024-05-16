import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./about_S.css";
import Cards from "../../components/Cards";
import FirstRow from "../../About_S_components/FirstRow";
import Customer_Reviews from "../../About_S_components/Customer_Reviews";

export default function About_Seedra() {
  return (
    <div className="about_seedra">
      <Header />
      <FirstRow />
      <div className="product_info_C">
        <div className="product_info-child-1">
          <p>Product information</p>
        </div>
        <div className="line-info"></div>
        <div className="product_info-child-2">
          <div>
            <p>
              {" "}
              EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
              professional instructions created by PhD Helga George <br /> Be
              sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our guarantee{" "}
              <br /> Cilantro common culinary uses: salsa, guacamole, pesto,
              salads, chutney, baked breads, pad thai, pico de gallo, rice,
              grilled shrimp skewers, falafel, and more <br /> Proudly sourced
              in the USA - our garden seeds are grown, harvested, and packaged
              in the USA. We support local farmers and are happy to produce this
              American-made product <br /> SEEDRA customer service - please
              contact us directly through Amazon with any questions or concerns
              about our products. We care about each customer and do our best to
              provide you with 100% satisfaction
            </p>
          </div>

          <div>
            <span>
              <p>Package Dimensions</p>
              <p>5.51 x 3.5 x 0.35 inches</p>
            </span>
            <span>
              <p>Item Weight</p>
              <p>0.317 ounces</p>
            </span>
            <span>
              <p>ASIN</p>
              <p>B08Z3HN5MP</p>
            </span>
          </div>
        </div>
      </div>

      <div className="Qustions_C">
        <div className="questions_child-1">
          <p>Frequently asked questions</p>
        </div>

        <div className="questions_child-2">

          <div className="question_CHILD2-1">
            <div className="question1">
              <p>
                For seller: are these seeds organic? it does matter if they are
                organic, seeds can hold pesticides from the plant they grow
                from.
              </p>
              <i className="fa-solid fa-plus"></i>
            </div>

            <div className="question2">
              <span>
                <p>Can they be grown on hydroponic systems</p>
                <i className="fa-solid fa-minus"></i>
              </span>

              <div></div>

              <div>
                <p>
                  I have heat mats and artificial light. <br /> I planted them in all
                  purpose potting soil. Moist not wet. Placed them on a heat
                  mat. If not available, somewhere where it's 72 degrees. Add
                  natural light, but I used artificial light. Takes 10- 15 days
                  because of there hard shell on the seed.
                </p>
                <i className="fa-solid fa-minus"></i>
              </div>
            </div>

            <div className="question3">
               <p>They did not germinate even when i followed directions. What should i do?</p>
               <i className="fa-solid fa-plus"></i>
            </div>
          </div>

          <div className="question_CHILD2-2">
          <div>
               <p>Didn't find answer</p>
               <p>Ask your own</p>
           </div>
           <div>
           <textarea placeholder="Type here" rows="4" cols="35"></textarea>
           </div>

           <button type="button">Send</button>
          </div>
           

        </div>
      </div>

      <Customer_Reviews/>
      <Cards />
      <Footer />
    </div>
  );
}
