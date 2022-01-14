import React, { useState, useEffect } from "react";
import Menu from "../../Components/Menu";
import Header from "../../Components/Header";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./style.css";
import "../style.css";

const SocialNetworks = () => {
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
            <h1>Social Networks</h1>
            <p>
              Be an aficionado of the new decentralized social media.
              <br />
              Solve the chicken and egg problem of early traction by
              incentivising users with your own Social Coin.
              <br />
              Achieve network effects built on incentive driven high speed user
              acquisition and engagements.
            </p>
          </div>
          <div id="socialNetworks"></div>
          <div className="benefits-div">
            <div className="left-bene">Benefits</div>
            <div className="rectangle">
              <div id="center-star"></div>
              <li className="list-supporters">
                Incentivise users to create, moderate and engage
              </li>
              <li className="list-supporters">
                Seamless way to create your social crypto
              </li>
            </div>
          </div>
          <div id="benefits"></div>
        </>
      ) : (
        <>
          <div id="socialNetworks">
            <div
              className="creators-text"
            >
              <h1>Social Networks</h1>
              <p>
                Be an aficionado of the new decentralized social media.
                <br />
                <br />
                Solve the chicken and egg problem of early traction by
                incentivising users with your own Social Coin.
                <br />
                <br />
                Achieve network effects built on incentive driven high speed
                user acquisition and engagements.
              </p>
            </div>
          </div>
          <div id="benefits" className="a-container">
            <div className="benefits-div">
              <div className="left-bene">Bene</div>
              <div className="rectangle">
                <div id="center-star"></div>
                <li className="list-supporters">
                  Incentivise users to create, moderate and engage
                </li>
                <li className="list-supporters">
                  Seamless way to create your social crypto
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
export default SocialNetworks;
