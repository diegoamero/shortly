import illustration from "./assets/illustration-working.svg"
import logo from "./assets/logo.svg"
import fullyCustomizable from "./assets/icon-fully-customizable.svg"
import detailedRecords from "./assets/icon-detailed-records.svg"
import brandRecognition from "./assets/icon-brand-recognition.svg"
import facebook from "./assets/icon-facebook.svg"
import instagram from "./assets/icon-instagram.svg"
import twitter from "./assets/icon-twitter.svg"
import pinterest from "./assets/icon-pinterest.svg"

function App() {
  return (
    <div className="app">
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
      <main className="app__container">
        <section className="container--main">
          <form className="container--form">
            <input type="text" placeholder="Shorten a link here..." />
            <input type="submit" value="Shorten It!" />
          </form>
          <div className="details">
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            <div className="details--box">
              <img src={brandRecognition} alt="brand-recognition-icon" />
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links don't
                mean a thing. Branded links help instil confidence in your content.
              </p>
            </div>
            <div className="details--box">
              <img src={detailedRecords} alt="detailed-records-icon" />
              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better decisions.
              </p>
            </div>
            <div className="details--box">
              <img src={fullyCustomizable} alt="fully-customizable-icon" />
              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
          <div className="promo">
            <h3>Boost your links today</h3>
            <button>Get Started</button>
          </div>
        </section>
      </main>
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
    </div>
  );
}

export default App;
