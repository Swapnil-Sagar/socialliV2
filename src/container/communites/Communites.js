import React, { useState, useEffect } from "react";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./style.css";
import "../style.css";

const Communites = () => {
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
      <Navbar innerPage={true} />
      {isMobile ? (
        <>
          <div
            className="creators-text"
            // data-aos={`${isMobile ? "fade-up" : "fade-right"}`}
          >
            <h1>Communites</h1>
            <p>
              Reward and reap the benefits of being part of a community by
              creating your own Community Coin.
              <br />
              <br />
              Community Coins will allow better ownership and benefits for
              contributing to a community’s construction and maintenance.
            </p>
          </div>
          <div id="communites"></div>
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
          <div id="communites">
            <div
              className="creators-text"
              // data-aos={`${isMobile ? "fade-up" : "fade-right"}`}
            >
              <h1>Communites</h1>
              <p>
                Reward and reap the benefits of being part of a community by
                creating your own Community Coin.
                <br />
                <br />
                Community Coins will allow better ownership and benefits for
                contributing to a community’s construction and maintenance.
              </p>
            </div>
          </div>
          <div id="benefits" className="a-container">
            <div className="benefits-div">
              <div className="left-bene">Bene</div>
              <div className="rectangle">
                <div id="center-star"></div>
                <li className="list-supporters">
                  Easiest way to launch your Community Coin
                </li>
                <li className="list-supporters">
                  Workshops on designing your crypto economy
                </li>
                <li className="list-supporters">
                  Training sessions for your fans and supporters
                </li>
                <li className="list-supporters">
                  Enable your community to create its own consensus
                </li>
                <li className="list-supporters">
                  Super easy and super fun for a community to enter the
                  metaverse
                </li>
                <li className="list-supporters">
                  Transparent pricing and control of your community
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
export default Communites;
