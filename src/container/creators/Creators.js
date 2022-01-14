import React, { useState, useEffect } from "react";
import Menu from "../../Components/Menu";
import Header from "../../Components/Header";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./style.css";
import "../style.css";

const Creators = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  return (
    <>
      <Navbar innerPage={true}/>
      {isMobile ? (
        <>
          <div
            className="creators-text"
            // data-aos={`${isMobile ? "fade-up" : "fade-right"}`}
          >
            <h1>Creators</h1>
            <p>
              Imagine connecting directly to your audience without any
              intermediary?
              <br />
              <br />
              Forget about paying the platform huge commission money and getting
              the most out of your community with Social.li Creator Coins.
            </p>
          </div>
          <div id="creators"></div>
          <div className="benefits-div">
            <div className="left-bene">Benefits</div>
            <div className="rectangle">
              <div id="center-star"></div>
              <li className="list-supporters">
                Turn your supporters into investors
              </li>
              <li className="list-supporters">
                Workshops on designing your crypto economy
              </li>
              <li className="list-supporters">
                Training sessions for your fans and supporters
              </li>
              <li className="list-supporters">
                Super easy and super fun way to enter the Metaverse
              </li>
              <li className="list-supporters">
                Transparent pricing and control of your economy
              </li>
              <li className="list-supporters">
                Tools to connect seamlessly with your audience
              </li>
            </div>
            {/* <div className="left-bene">fites</div> */}
          </div>
          <div id="benefits"></div>
        </>
      ) : (
        <>
          <div id="creators">
            <div
              className="creators-text"
              // data-aos={`${isMobile ? "fade-up" : "fade-right"}`}
            >
              <h1>Creators</h1>
              <p>
                Imagine connecting directly to your audience without any
                intermediary?
                <br />
                <br />
                Forget about paying the platform huge commission money and
                getting the most out of your community with Social.li Creator
                Coins.
              </p>
            </div>
          </div>
          <div id="benefits" className="a-container">
            <div className="benefits-div">
              <div className="left-bene">Bene</div>
              <div className="rectangle">
                <div id="center-star"></div>
                <li className="list-supporters">
                  Turn your supporters into investors
                </li>
                <li className="list-supporters">
                  Workshops on designing your crypto economy
                </li>
                <li className="list-supporters">
                  Training sessions for your fans and supporters
                </li>
                <li className="list-supporters">
                  Super easy and super fun way to enter the Metaverse
                </li>
                <li className="list-supporters">
                  Transparent pricing and control of your economy
                </li>
                <li className="list-supporters">
                  Tools to connect seamlessly with your audience
                </li>
              </div>
              <div className="left-bene">fits</div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};
export default Creators;
