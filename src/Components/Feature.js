import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Feature({ type }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480)
  const content1 =
    'No two communities are the same and neither should be their tokens. With Social.li you can create a cryptocurrency customised to the unique needs of your community.'

  const content3 =
    'Your social token is only as valuable as your community thinks it is. Use our guides to help your community members get crypto savvy.  '

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 1200
        if (ismobile !== isMobile) setIsMobile(ismobile)
      },
      false
    )
  }, [isMobile])

  return (
    <div id={type === 'train' ? 'train' : 'features'}>
      <div
        data-aos={`${isMobile ? 'fade-up' : 'fade-right'}`}
        className="a-container"
      >
        {/* <div data-aos="fade-left"> */}
        {type === 'train' ? (
          <>
            <h4>TRAIN</h4>
            <h1>Train your Community</h1>
            <p>{content3}</p>
          </>
        ) : (
          <>
            <h4>LAUNCH</h4>
            <h1>Launch your own Cryptocurrency</h1>
            <p>{content1}</p>
          </>
        )}
      </div>
      {/* </div> */}
    </div>
  )
}

export default Feature
