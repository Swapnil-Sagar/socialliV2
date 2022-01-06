import React from 'react'
import Navbar from './Navbar'
import logo from '../images/img_socialli logo big@1x.png'
import Typical from 'react-typical'
import TypeAnimation from 'react-type-animation'

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <a href="/" className="header">
          <img src={logo} alt="" />
        </a>
        <p>Social Tokens</p>
        <div className="text-animate">
          <p>for</p>
          <span>
            {/* <Typical
              steps={[
                'Creators',
                2000,
                'Communities',
                2000,
                'Games',
                2000,
                'Social Networks',
                2000,
              ]}
              loop={Infinity}
              wrapper="h1"
            /> */}
            <TypeAnimation
              cursor={false}
              sequence={[
                'Games',
                2000,
                'Communities',
                2000,
                'Creators',
                2000,
                'Social Networks',
                2000,
              ]}
              wrapper="h1"
              repeat={Infinity}
            />
          </span>
        </div>
        <h2>on Earth and the Metaverse</h2>
        <a href="/" className="cv-btn">
          Apply
        </a>
      </div>
    </div>
  )
}

export default Header
