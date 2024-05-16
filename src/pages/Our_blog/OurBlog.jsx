import React from "react";
import "./ourBlog.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Blog from "../../components/Blog";
import Search_part from "../../components/Search_part";
export default function OurBlog() {
  return (
    <div className="ourBlog">
      <Header />
      <div className="Welcome_blog">
        <p>Welcome to our blog</p>
        <p>
          Here you can find a lot of interesting and useful information that you
          need in gardening and creating a beautiful garden
        </p>
      </div>
      <Search_part />
      <Blog />
      <div className="angry-grid2">
        <div id="item-0">
          <div>
               <p><i className="fa-solid fa-clock"></i> 12.09.2021</p>
               <p>How to plant spinach correctly in winter</p>
          </div>
          <div>
               <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
          </div>
          <div>
               <button type="button">Read</button>
          </div>
        </div>

        <div id="item-1">
        <div>
               <p><i className="fa-solid fa-clock"></i> 12.09.2021</p>
               <p>How to plant spinach correctly in winter</p>
          </div>
          <div>
               <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
          </div>
          <div>
               <button type="button">Read</button>
          </div>
        </div>
        
        <div id="item-2">
        <div>
               <p><i className="fa-solid fa-clock"></i> 12.09.2021</p>
               <p>How to plant spinach correctly in winter</p>
          </div>
          <div>
               <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
          </div>
          <div>
               <button type="button">Read</button>
          </div>
        </div>

        <div id="item-3">
        <div>
               <p><i className="fa-solid fa-clock"></i> 12.09.2021</p>
               <p>How to plant spinach correctly in winter</p>
          </div>
          <div>
               <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
          </div>
          <div>
               <button type="button">Read</button>
          </div>
        </div>

        <div id="item-4">
        <div>
               <p><i className="fa-solid fa-clock"></i> 12.09.2021</p>
               <p>How to plant spinach correctly in winter</p>
          </div>
          <div>
               <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
          </div>
          <div>
               <button type="button">Read</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
