import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./container/mainPage";
import Creators from "./container/creators/Creators";
import Communites from "./container/communites/Communites";
import GameDeveloper from "./container/gameDeveloper/GameDeveloper";
import SocialNetworks from "./container/socialNetworks/SocialNetworks";
import MetaverseOnboarding from "./container/metaverseOnboarding/MetaverseOnboarding";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/communites" element={<Communites />} />
          <Route exact path="/creators" element={<Creators />} />
          <Route exact path="/game-developers" element={<GameDeveloper />} />
          <Route exact path="/social-networks" element={<SocialNetworks />} />
          <Route
            exact
            path="/metaverse-onboarding"
            element={<MetaverseOnboarding />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
