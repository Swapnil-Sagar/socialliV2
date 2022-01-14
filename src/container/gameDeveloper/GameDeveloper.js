import React, { useState, useEffect } from "react";
import Menu from "../../Components/Menu";
import Header from "../../Components/Header";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./style.css";
import "../style.css";

const GameDeveloper = () => {
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
            <h1>Game Developers</h1>
            <p>
              30% of all games would be blockchain enabled by 2023. Be a
              frontrunner by integrating the Social.li SDK to transform your
              game currency and artefacts into crypto and NFTs.
              <br />
              Use built in Play2Earn and Decentralised Finance to create
              unprecedented incentives for your gamers.
              <br />
              Leverage your community across titles and seasons.
              <br />
              Build in-game economies and marketplaces with NFTs.
            </p>
          </div>
          <div id="gameDeveloper"></div>
          <div className="benefits-div">
            <div className="left-bene">Benefits</div>
            <div className="rectangle">
              <div id="center-star"></div>
              <li className="list-supporters">
                Easiest way to create custom crypto and NFTs for game developers
              </li>
              <li className="list-supporters">
                Build your own Metaverse, link it with your game
              </li>
              <li className="list-supporters">
                Transparent pricing and control with the developer
              </li>
              <li className="list-supporters">
                Compatible with multiple blockchains and metaverses
              </li>
            </div>
            {/* <div className="left-bene">fites</div> */}
          </div>
          <div id="benefits"></div>
        </>
      ) : (
        <>
          <div id="gameDeveloper">
            <div
              className="creators-text"
              // data-aos={`${isMobile ? "fade-up" : "fade-right"}`}
            >
              <h1>Game Developers</h1>
              <p>
                30% of all games would be blockchain enabled by 2023. Be a
                frontrunner by integrating the Social.li SDK to transform your
                game currency and artefacts into crypto and NFTs.
                <br />
                Use built in Play2Earn and Decentralised Finance to create
                unprecedented incentives for your gamers.
                <br />
                Leverage your community across titles and seasons.
                <br />
                Build in-game economies and marketplaces with NFTs.
              </p>
            </div>
          </div>
          <div id="benefits" className="a-container">
            <div className="benefits-div">
              <div className="left-bene">Bene</div>
              <div className="rectangle">
                <div id="center-star"></div>
                <li className="list-supporters">
                  Easiest way to create custom crypto and NFTs for game
                  developers
                </li>
                <li className="list-supporters">
                  Build your own Metaverse, link it with your game
                </li>
                <li className="list-supporters">
                  Transparent pricing and control with the developer
                </li>
                <li className="list-supporters">
                  Compatible with multiple blockchains and metaverses
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
export default GameDeveloper;
