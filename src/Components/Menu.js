import React from 'react'
import telegram from '../images/img_telegram-logo@1x.png'
import discord from '../images/img_discord-white-logo@1x.png'
import logo from '../images/img_socialli logo big@1x.png'
import illus from '../images/V2/img_illu-7@2x.png'

function Footer() {
  return (
    // <div id="contact">
    //   <footer className="footer">
    // <div className="container">
    //   <div className="footer-row">
    //     <div className="footer-col1">
    //       <a href="/" className="footer-logo">
    //         <img src={logo} alt="" />
    //       </a>
    //       <div className="footer-join">
    //         <h6>Join us on</h6>
    //         <div className="social-links">
    //           <a href="#">
    //             <img src={telegram} alt="" />
    //           </a>
    //           <a href="#">
    //             <img src={discord} alt="" />
    //           </a>
    //         </div>
    //         <span>Copyright © 2021 Wowlabz. All rights reserved.</span>
    //       </div>
    //     </div>
    //     <div className="footer-col">
    //       <h4>Quick Links</h4>
    //       <ul>
    //         <li>
    //           <a href="#">About</a>
    //         </li>
    //         <li>
    //           <a href="#">Team</a>
    //         </li>
    //         <li>
    //           <a href="#">Blog</a>
    //         </li>
    //         <li>
    //           <a href="#">Investors</a>
    //         </li>
    //         <li>
    //           <a href="#">Community</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footer-col">
    //       <h4>Try Social.li</h4>
    //       <ul>
    //         <li>
    //           <a href="#">Creators</a>
    //         </li>
    //         <li>
    //           <a href="#">Communities</a>
    //         </li>
    //         <li>
    //           <a href="#">Game Developers</a>
    //         </li>
    //         <li>
    //           <a href="#">Social Networks</a>
    //         </li>
    //         <li>
    //           <a href="#">Metaverse Onboarding</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footer-col2">
    //       <h4>Invest in Social.li</h4>
    //       <p>
    //         Social.li is rising its seed round. <br /> Please fill the form
    //         below and our team will get in touch
    //       </p>
    //       <ul>
    //         <li>
    //           <input
    //             className="input-name"
    //             type="text"
    //             placeholder="Name"
    //           />
    //           <input type="email" placeholder="Email" />
    //         </li>
    //         <li>
    //           <input
    //             className="input-ph"
    //             type="mobile"
    //             placeholder="Mobile Number"
    //           />
    //           <input type="text" placeholder="Fund name (optional)" />
    //         </li>
    //         <li>
    //           <button>Submit</button>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footer-col-mb">
    //       <h6>Join us on</h6>
    //       <div className="social-links">
    //         <a href="#">
    //           <img src={telegram} alt="" />
    //         </a>
    //         <a href="#">
    //           <img src={discord} alt="" />
    //         </a>
    //       </div>
    //       <span>Copyright © 2021 Wowlabz. All rights reserved.</span>
    //     </div>
    //   </div>
    // </div>
    //   </footer>
    // </div>

    <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
      <div class="hamburger">
        <div></div>
      </div>
      <div class="menu">
        <div>
          <div>
            <div className="container">
              <div className="footer-row">
                <div className="footer-col1">
                  <a href="/" className="footer-logo">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="footer-col-links">
                  <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Team</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Investors</a>
                      </li>
                      <li>
                        <a href="#">Community</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-col">
                    <h4>Try Social.li</h4>
                    <ul>
                      <li>
                        <a href="#">Creators</a>
                      </li>
                      <li>
                        <a href="#">Communities</a>
                      </li>
                      <li>
                        <a href="#">Game Developers</a>
                      </li>
                      <li>
                        <a href="#">Social Networks</a>
                      </li>
                      <li>
                        <a href="#">Metaverse Onboarding</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-col2">
                  <h4>Invest in Social.li</h4>
                  <p>
                    Social.li is rising its seed round. <br /> Please fill the
                    form below and our team will get in touch
                  </p>
                  <ul>
                    <li>
                      <input
                        className="input-name"
                        type="text"
                        placeholder="Name"
                      />
                      <input type="email" placeholder="Email" />
                    </li>
                    <li>
                      <input
                        className="input-ph"
                        type="mobile"
                        placeholder="Mobile Number"
                      />
                      <input type="text" placeholder="Fund name (optional)" />
                    </li>
                    <li>
                      <button>Submit</button>
                    </li>
                  </ul>
                </div>
                <div className="footer-join">
                  <h6>Join us on</h6>
                  <div className="social-links">
                    <a href="#">
                      <img src={telegram} alt="" />
                    </a>
                    <a href="#">
                      <img src={discord} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-illus">
                <img src={illus} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
