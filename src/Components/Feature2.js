import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Feature2({ type }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480)
  const content2 =
    'Join our entrepreneur cohorts for workshops and playbooks designed for your industry. Create utility for your token. Learn from peers and experts. '
  const content4 =
    'Crypto is the native currency of the Metaverse. Build your presence in your own or popular virtual worlds, and guide your community to follow suit.'

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
    <div id={type === 'migrate' ? 'migrate' : 'about'}>
      <div
        // data-aos={'fade-left'}
        data-aos={`${isMobile ? 'fade-up' : 'fade-left'}`}
        className="a-container"
        style={{ paddingLeft: 0 }}
      >
        {type === 'migrate' ? (
          <div className="migrate-container">
            <h4>MIGRATE</h4>
            <h1>Migrate to the Metaverse</h1>
            <p>{content4}</p>
          </div>
        ) : (
          <>
            <h4>DESIGN</h4>
            <h1>Design you Economy</h1>
            <p>{content2}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Feature2
