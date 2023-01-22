import React from 'react'
import facebook from "../../assets/icon-facebook.svg"
import instagram from "../../assets/icon-instagram.svg"
import twitter from "../../assets/icon-twitter.svg"
import pinterest from "../../assets/icon-pinterest.svg"

function Footer() {
  return (
    <footer>
        <div className="footer__content">
          <div className="footer--section">
            <p className="footer--title">Features</p>
            <p><a href="github.com">Link Shortening</a></p>
            <p><a href="github.com">Branded Links</a></p>
            <p><a href="github.com">Analytics</a></p>
          </div>
          <div className="footer--section">
            <p className="footer--title">Resources</p>
            <p><a href="github.com">Blog</a></p>
            <p><a href="github.com">Developers</a></p>
            <p><a href="github.com">Support</a></p>
          </div>
          <div className="footer--section">
            <p className="footer--title">Company</p>
            <p><a href="github.com">About Our Team</a></p>
            <p><a href="github.com">Careers</a></p>
            <p><a href="github.com">Contact</a></p>
          </div>
        </div>
        <div className="footer__socialMedia">
          <p className="socialMedia">
            <a href="github.com">
              <img src={facebook} alt="facebook-icon" />
            </a>
          </p>
          <p className="socialMedia">
            <a href="github.com">
              <img src={twitter} alt="twitter-icon" />
            </a>
          </p>
          <p className="socialMedia">
            <a href="github.com">
              <img src={pinterest} alt="pinterest-icon" />
            </a>
          </p>
          <p className="socialMedia">
            <a href="github.com">
              <img src={instagram} alt="instagram-icon" />
            </a>
          </p>
        </div>
      </footer>
  )
}

export default Footer