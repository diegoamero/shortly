import React from 'react'
import logo from '../../assets/logo.svg'
import illustration from "../../assets/illustration-working.svg"
function Header() {
  return (
    <header className="header">
        <nav className="menu">
          <img src={logo} alt="shortly-logo" />
          <button>Hamburguer menu</button>
        </nav>
        <div className="header__container">
          <img src={illustration} className="illustration" alt="illustration people working" />
          <h2>More than just shorter links</h2>
          <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
          <button>Get Started</button>
        </div>
      </header>
  )
}

export default Header