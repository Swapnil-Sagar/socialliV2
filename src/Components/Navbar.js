import React, { useState } from 'react'
import logo from '../images/img_socialli logo big@1x.png'
import Menu from './Menu'


function Navbar({innerPage=false}) {
  const [nav, setNav] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true)
    } else {
      setNav(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <nav className={nav || innerPage ? 'nav active' : 'nav'}>
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>
        {/* <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label> */}
      </nav>
      <Menu />
    </>
  )
}

export default Navbar
