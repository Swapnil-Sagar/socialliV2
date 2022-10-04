import React from 'react'
import star1 from '../images/img_star1@1x.png'
import star2 from '../images/img_star2@1x.png'
import astro1 from '../images/img_illu-06@2x.png'
import astro2 from '../images/img_illu-02@2x.png'

function Apply({ type }) {
  return (
    <div id="apply">
      <div className="about-text">
        <h2>Apply for our upcoming cohort to jumpstart your journey to the</h2>
        <div className="metaverse">
          <div className="metaverse-img1">
            <img src={star1} alt="" />
          </div>
          <h1>METAVERSE</h1>
          <div className="metaverse-img2">
            <img src={star2} alt="" />
          </div>
        </div>

        <button>Apply</button>
      </div>
    </div>
  )
}

export default Apply
