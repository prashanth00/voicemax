import React from "react";
import "./App.css"; // Import your CSS file
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6"; // Import icons from react-icons
import appstore from "./assets/appstore.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Voice max</h1>
        <p>Unlock your maximum potential</p>
        <a
          href="https://apps.apple.com/app/id123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appstore} alt="Download on the App Store" />
        </a>
      </header>
      <footer className="footer">
        <div className="footer-content">
          <div className="social-media">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="footer-links">
            <a href="/">Contact</a>
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
            <a href="/">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
