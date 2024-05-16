import "./home.css";
import Header from "../../components/Header";
import ADContainer from "../../components/ADContainer";
import SmallAd from "../../components/SmallAd";
import Products from "../../components/Products";
import Cards from "../../components/Cards";
import Blog from "../../components/Blog";
import SwiperCard from "../../components/SwiperCard";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <div className="home">
      <Header />
      <ADContainer />
      <SmallAd />
      <Products />
      <Cards />
      <Blog />
      <SwiperCard />
      <div className="seedra_grow">
        <p>Seedra helps to grow fast and efficiant</p>
        <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George <br /> <br /> Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more <br /> <br /> Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
      </div>
      <Footer/>
    </div>
  );
}
