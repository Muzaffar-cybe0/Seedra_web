import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./contact.css";
import Girl_ipad from "./girl_with_ipad.png";
export default function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="lettuce_1-row">
        <p>How to plant spinach correctly in winter</p>
      </div>
      <div className="Details_C">
        <div className="details_child-1">
          <p>
            <i className="fa-solid fa-clock"></i> 12.09.2021
          </p>
          <div></div>
        </div>

        <div className="details_child-2">
          <div className="children_of_D-child2_child-1">
            <div>
              <p>
                Spinach is a cool-season plant that’s one of the first crops of
                spring and a great fall crop as well. You’ll enjoy growing this
                undemanding plant and will enjoy eating it even more. Harvest
                spinach any time to enjoy raw in salads or cook it up in seconds
                for a delicious side dish that’s loaded with vitamins and
                minerals. If you want to grow spinach in your garden, here’s
                everything you need to know. <br /> <br /> You can also download
                my How Do I Grow Spinach? one-sheet and keep the free resource
                handy for your reference
              </p>
            </div>

            <div>
              <img src={Girl_ipad} alt="girl" />
            </div>

            <div>
              <h1>When, Where and How to Plant Spinach</h1>
              <p>
                Spinach can be either sown directly into the garden or started
                from seeds indoors. For the least work and the most convenience,
                seedlings can also be purchased from a nursery in spring. <br /> <br /> To
                give spinach a head start, plant seeds in sterile seed-starting
                mix indoors about six weeks before the last expected frost date.
                The seeds will germinate one to two weeks later in soil that is
                between 60 and 68 degrees. If growing in a room that stays cool,
                consider using a seed-starting mat that will raise the
                temperature of the soil. <br /> <br /> Spinach is frost tolerant, so it can go
                in the ground long before many other crops. When spinach
                seedlings have two true leaves and when there are four or fewer
                weeks remaining until your last frost date, the seedlings may be
                transplanted outdoors.  <br /> <br /> Seeds can be planted outdoors as soon as
                the soil is workable in spring — about six weeks before the last
                expected frost — and they will germinate as the days warm.  <br /> <br /> To
                germinate seeds faster and more reliably, there is a process
                called “priming.” A week before sowing spinach seeds indoors or
                out, soak seeds in room temperature water overnight or up to 24
                hours. Next, place the seeds on a paper towel to air dry for one
                or two days. Once the seeds appear dry, place them in an
                airtight container and store the container in a cool place. The
                seeds will have soaked up and retained enough water to stimulate
                the first stages of germination. Wait at least five days, but no
                more than seven, and sow the seeds.  <br /> <br /> Primed spinach seeds will
                germinate both faster and more uniformly: In about five days,
                the grass-like seedlings will emerge.
              </p>
            </div>
          </div>

          <div className="children_of_D-child2_child-2">
               <div>
                    <p>Releted titles</p>
               </div>

               <div>
                    <p><i class="fa-solid fa-clock"></i> 12.09.2021</p> 
                    <p>How to plant spinach correcly in winter</p>
                    <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                   <button type="button">Read</button>
               </div>

               <div>
                    <p><i class="fa-solid fa-clock"></i> 12.09.2021</p> 
                    <p>How to plant spinach correcly in winter</p>
                    <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                   <button type="button">Read</button>
               </div>
               
          </div>

        </div>

        <div className="details_child-3">
          <div>
           <p>This was helpful?</p>
           <p>Share with friends</p>
          </div>

          <div>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
