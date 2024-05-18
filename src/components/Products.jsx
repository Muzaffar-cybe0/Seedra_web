import React, { useRef, useState } from "react";
import Barg_1 from "../assets/barg-1.png";
import Barg_2 from "../assets/barg-2.png";
import List from "../assets/list.png";
import Potato from "../assets/potato.png";
import Strawberry from "../assets/strawberry.png";
import GardenTool from "../assets/gardening tool.png";
import Flower from "../assets/Flower.png";

export default function Products() {
  const Downpart_1 = useRef();
  const Downpart_2 = useRef();
  const Downpart_3 = useRef();
  const Downpart_4 = useRef();
  const Downpart_5 = useRef();
  const Downpart_6 = useRef();
  const Downpart_7 = useRef();
  const [isTrue, setIsTrue] = useState(false);
  const [isTrue2, setIsTrue2] = useState(false);
  const [isTrue3, setIsTrue3] = useState(false);
  const [isTrue4, setIsTrue4] = useState(false);
  const [isTrue5, setIsTrue5] = useState(false);
  const [isTrue6, setIsTrue6] = useState(false);
  const [isTrue7, setIsTrue7] = useState(false);
  

  const ShowDownPart = () => {
    setIsTrue(!isTrue);
    if (isTrue === true) {
      Downpart_1.current.style.opacity = "1";
      Downpart_1.current.style.transform = "translateY(18px)";
      Downpart_1.current.style.height = "460px";
      Downpart_1.current.style.top = "100%";
      Downpart_1.current.style.left = "0%";
    } else if (isTrue === false) {
      Downpart_1.current.style.opacity = "0";
      Downpart_1.current.style.transform = "translateY(-10px)";
      Downpart_1.current.style.height = "0%";
    }
    else{
     console.log("Error");
    };
  };
  const ShowDownPart2 = () => {
     setIsTrue2(!isTrue2);
     if (isTrue2 === true) {
      Downpart_2.current.style.opacity = "1";
      Downpart_2.current.style.transform = "translateY(18px)";
      Downpart_2.current.style.height = "460px";
      Downpart_1.current.style.top = "100%";
      Downpart_1.current.style.left = "0%";
    } else if (isTrue2 === false) {
      Downpart_2.current.style.opacity = "0";
      Downpart_2.current.style.transform = "translateY(-10px)";
      Downpart_2.current.style.height = "0%";
    };
  };
  const ShowDownPart3 = () => {
     setIsTrue3(!isTrue3);
     if (isTrue3 === true) {
      Downpart_3.current.style.opacity = "1";
      Downpart_3.current.style.transform = "translateY(18px)";
      Downpart_3.current.style.height = "460px";
      Downpart_1.current.style.top = "100%";
      Downpart_1.current.style.left = "0%";
    } else if (isTrue3 === false) {
      Downpart_3.current.style.opacity = "0";
      Downpart_3.current.style.transform = "translateY(-10px)";
      Downpart_3.current.style.height = "0%";
    };
  };
  const ShowDownPart4 = () => {
     setIsTrue4(!isTrue4);
     if (isTrue4 === true) {
      Downpart_4.current.style.opacity = "1";
      Downpart_4.current.style.transform = "translateY(18px)";
      Downpart_4.current.style.height = "460px";
      Downpart_1.current.style.top = "100%";
      Downpart_1.current.style.left = "0%";
    } else if (isTrue4 === false) {
      Downpart_4.current.style.opacity = "0";
      Downpart_4.current.style.transform = "translateY(-10px)";
      Downpart_4.current.style.height = "0%";
    };
  };
  const ShowDownPart5 = () => {
     setIsTrue5(!isTrue5);
     if (isTrue5 === true) {
      Downpart_5.current.style.opacity = "1";
      Downpart_5.current.style.transform = "translateY(18px)";
      Downpart_5.current.style.height = "460px";
      Downpart_1.current.style.top = "100%";
      Downpart_1.current.style.left = "0%";
    } else if (isTrue5 === false) {
      Downpart_5.current.style.opacity = "0";
      Downpart_5.current.style.transform = "translateY(-10px)";
      Downpart_5.current.style.height = "0%";
    };
  };
  const ShowDownPart6 = () => {
     setIsTrue6(!isTrue6);
     if (isTrue6 === true) {
      Downpart_6.current.style.opacity = "1";
      Downpart_6.current.style.transform = "translateY(18px)";
      Downpart_6.current.style.height = "460px";
      Downpart_1.current.style.top = "100%";
      Downpart_1.current.style.left = "0%";
    } else if (isTrue6 === false) {
      Downpart_6.current.style.opacity = "0";
      Downpart_6.current.style.transform = "translateY(-10px)";
      Downpart_6.current.style.height = "0%";
    };
  };
  const ShowDownPart7 = () => {
     setIsTrue7(!isTrue7);
     if (isTrue7 === true) {
      Downpart_7.current.style.opacity = "1";
      Downpart_7.current.style.transform = "translateY(18px)";
      Downpart_7.current.style.height = "460px";
      Downpart_1.current.style.top = "100%";
      Downpart_1.current.style.left = "0%";
    } else if (isTrue7 === false) {
      Downpart_7.current.style.opacity = "0";
      Downpart_7.current.style.transform = "translateY(-10px)";
      Downpart_7.current.style.height = "0%";
    };
  };

  return (
    <div className="products">
      <div className="products-1">
        <div className="product_1-1">
          <p>Our Products</p>
          <button type="button">View all(12)</button>
        </div>

        <div className="product_1-2">

          <div onClick={() => ShowDownPart()}>
            <button type="button">
              <img src={Barg_1} alt="barg" />
              All
            </button>

            <div className="downpart_1" ref={Downpart_1} >
              <div className="downpart1_child-1">
                <p>All</p>
              </div>
              <div className="downpart1_child-2">
                <div>
                  <p>angelica</p>
                  <p>anise</p>
                  <p>anise hyssop</p>
                  <p>asclepias</p>
                  <p>basil</p>
                  <p>beel balm</p>
                  <p>barage</p>
                </div>

                <div>
                  <p>Calendula</p>
                  <p>Caraway</p>
                  <p>Catmint</p>
                  <p>Catnip</p>
                  <p>Chamomile</p>
                  <p>Chervil</p>
                </div>
              </div>
              <div className="downpart1_child-3">
                <p>View All</p>
              </div>
            </div>
          </div>

          <div onClick={() => ShowDownPart2()}>
            <button type="button">
              <img src={List} alt="list" />
              bundles
            </button>
            <div className="downpart_1" ref={Downpart_2} >
              <div className="downpart1_child-1">
                <p>Bundles</p>
              </div>
              <div className="downpart1_child-2">
                <div>
                  <p>angelica</p>
                  <p>anise</p>
                  <p>anise hyssop</p>
                  <p>asclepias</p>
                  <p>basil</p>
                  <p>beel balm</p>
                  <p>barage</p>
                </div>

                <div>
                  <p>Calendula</p>
                  <p>Caraway</p>
                  <p>Catmint</p>
                  <p>Catnip</p>
                  <p>Chamomile</p>
                  <p>Chervil</p>
                </div>

                
              </div>
              <div className="downpart1_child-3">
                <p>View Bundles</p>
              </div>
            </div>

          </div>

          <div onClick={()=> ShowDownPart3()}>
            <button type="button">
              <img src={Barg_2} alt="barg-2" />
              herbs
            </button>
            <div className="downpart_1" ref={Downpart_3} >
              <div className="downpart1_child-1">
                <p>Herbs</p>
              </div>
              <div className="downpart1_child-2">
                <div>
                  <p>angelica</p>
                  <p>anise</p>
                  <p>anise hyssop</p>
                  <p>asclepias</p>
                  <p>basil</p>
                  <p>beel balm</p>
                  <p>barage</p>
                </div>

                <div>
                  <p>Calendula</p>
                  <p>Caraway</p>
                  <p>Catmint</p>
                  <p>Catnip</p>
                  <p>Chamomile</p>
                  <p>Chervil</p>
                </div>

              </div>
              <div className="downpart1_child-3">
                <p>View Herbs</p>
              </div>
            </div>

          </div>

          <div onClick={()=> ShowDownPart4()}>
            <button type="button">
              <img src={Potato} alt="potato" />
              vegatables
            </button>
            <div className="downpart_1" ref={Downpart_4} >
              <div className="downpart1_child-1">
                <p>Vegetables</p>
              </div>
              <div className="downpart1_child-2">
                <div>
                  <p>angelica</p>
                  <p>anise</p>
                  <p>anise hyssop</p>
                  <p>asclepias</p>
                  <p>basil</p>
                  <p>beel balm</p>
                  <p>barage</p>
                </div>

                <div>
                  <p>Calendula</p>
                  <p>Caraway</p>
                  <p>Catmint</p>
                  <p>Catnip</p>
                  <p>Chamomile</p>
                  <p>Chervil</p>
                </div>
              </div>
              <div className="downpart1_child-3">
                <p>View Vegetables</p>
              </div>
            </div>
          </div>

          <div onClick={()=> ShowDownPart5()}>
            <button type="button" >
              <img src={Strawberry} alt="strawberry" />
              Fruits
            </button>
            <div className="downpart_1" ref={Downpart_5} >
              <div className="downpart1_child-1">
                <p>Fruits</p>
              </div>
              <div className="downpart1_child-2">
                <div>
                  <p>angelica</p>
                  <p>anise</p>
                  <p>anise hyssop</p>
                  <p>asclepias</p>
                  <p>basil</p>
                  <p>beel balm</p>
                  <p>barage</p>
                </div>

                <div>
                  <p>Calendula</p>
                  <p>Caraway</p>
                  <p>Catmint</p>
                  <p>Catnip</p>
                  <p>Chamomile</p>
                  <p>Chervil</p>
                </div>
              </div>
              <div className="downpart1_child-3">
                <p>View Fruits</p>
              </div>
            </div>
          </div>

          <div onClick={()=> ShowDownPart6()}>
            <button type="button">
              <img src={GardenTool} alt="gardenTool" />
              supplies
            </button>
            <div className="downpart_1" ref={Downpart_6} >
              <div className="downpart1_child-1">
                <p>Supplies</p>
              </div>
              <div className="downpart1_child-2">
                <div>
                  <p>angelica</p>
                  <p>anise</p>
                  <p>anise hyssop</p>
                  <p>asclepias</p>
                  <p>basil</p>
                  <p>beel balm</p>
                  <p>barage</p>
                </div>

                <div>
                  <p>Calendula</p>
                  <p>Caraway</p>
                  <p>Catmint</p>
                  <p>Catnip</p>
                  <p>Chamomile</p>
                  <p>Chervil</p>
                </div>
              </div>
              <div className="downpart1_child-3">
                <p>View Supplies</p>
              </div>
            </div>
          </div>

          <div onClick={()=> ShowDownPart7()}>
            <button type="button">
              <img src={Flower} alt="flower" />
              flowers
            </button>
            <div className="downpart_1" ref={Downpart_7} >
              <div className="downpart1_child-1">
                <p>Flowers</p>
              </div>
              <div className="downpart1_child-2">
                <div>
                  <p>angelica</p>
                  <p>anise</p>
                  <p>anise hyssop</p>
                  <p>asclepias</p>
                  <p>basil</p>
                  <p>beel balm</p>
                  <p>barage</p>
                </div>

                <div>
                  <p>Calendula</p>
                  <p>Caraway</p>
                  <p>Catmint</p>
                  <p>Catnip</p>
                  <p>Chamomile</p>
                  <p>Chervil</p>
                </div>
              </div>
              <div className="downpart1_child-3">
                <p>View Flowers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
