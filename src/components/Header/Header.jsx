import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import illustration from "../../assets/illustration-working.svg"
import Hamburger from 'hamburger-react'
import './Header.scss'

function Header() {
  const [menuClass, setClass] = useState('closed')

  const Toggle = (toogled) => {
      if (toogled) {
        setClass('opened')
      } else {
        setClass('closed')
      }
  }

  return (
    <header className="header">
      <div className="header--top">
       
        <img src={logo} className='logo' alt="shortly-logo" />
        <Hamburger color="#9e9aa7" size={20} onToggle={toggled => Toggle(toggled)} />

        <nav className={`menu ${menuClass}`}>
          <ul className='menu__list'>
            <li className="menu--link">
              <a href='https://youtube.com'>Features</a>
            </li>
            <li className="menu--link">
              <a href='https://youtube.com'>Pricing</a>
            </li>
            <li className="menu--link">
              <a href='https://youtube.com'>Resources</a>
            </li>
            <li >
              <button className="menu--button login">Login</button>
            </li>
            <li>
              <button className="menu--button signUp">Sign Up</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__container">
        <img src={illustration} className="illustration" alt="illustration people working" />
        <h2 className='slogan'>More than just shorter links</h2>
        <p className='brand-promo'>Build your brand's recognition and get detailed insights on how your links are performing</p>
        <button className='get-started'>Get Started</button>
      </div>
    </header>
  )
}

export default Header