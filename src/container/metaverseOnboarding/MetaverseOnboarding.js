import React, { useState, useEffect } from "react";
import Menu from "../../Components/Menu";
import Header from "../../Components/Header";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./style.css";
import "../style.css";

const MetaverseOnboarding = () => {
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
            <h1>Metaverse Onboarding</h1>
            <p>
              Metaverse is the heart of Web 3 and we help you transfer to the
              new infrastructure of the internet.
              <br />
              <br />
              Helping brands and artists create their digital versions to
              interact with their fans and community.
            </p>
          </div>
          <div id="metaverse"></div>
          <div className="benefits-div">
            <div className="left-bene">Benefits</div>
            <div className="rectangle-1">
              <div id="center-star"></div>
              <li className="list-supporters">
                Workshops and guides on the top Metaverses
              </li>
              <li className="list-supporters">
                Buy, sell Land on the Metaverse
              </li>
              <li className="list-supporters">
                Build a property on the Metaverse
              </li>
              <li className="list-supporters">
                Rent, Sell, Stake your properties to earn
              </li>
              <li className="list-supporters">
                Do’s and don’ts on the Metaverse
              </li>
            </div>
            {/* <div className="left-bene">fites</div> */}
          </div>
          <div id="benefits"></div>
        </>
      ) : (
        <>
          <div id="metaverse">
            <div
              className="creators-text"
              // data-aos={`${isMobile ? "fade-up" : "fade-right"}`}
            >
              <h1>Metaverse Onboarding</h1>
              <p>
                Metaverse is the heart of Web 3 and we help you transfer to the
                new infrastructure of the internet.
                <br />
                <br />
                Helping brands and artists create their digital versions to
                interact with their fans and community.
              </p>
            </div>
          </div>
          <div id="benefits" className="a-container">
            <div className="benefits-div">
              <div className="left-bene">Bene</div>
              <div className="rectangle-1">
                <div id="center-star"></div>
                <li className="list-supporters">
                  Workshops and guides on the top Metaverses
                </li>
                <li className="list-supporters">
                  Buy, sell Land on the Metaverse
                </li>
                <li className="list-supporters">
                  Build a property on the Metaverse
                </li>
                <li className="list-supporters">
                  Rent, Sell, Stake your properties to earn
                </li>
                <li className="list-supporters">
                  Do’s and don’ts on the Metaverse
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
export default MetaverseOnboarding;
