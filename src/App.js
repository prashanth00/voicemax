import React from "react";
import "./App.css"; // Import your CSS file
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6"; // Import icons from react-icons
import appstore from "./assets/appstore.png";
import icon from "./assets/icon.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="titleAndIcon">
          <img className="icon" src={icon} alt="Icon" />
          <h1>My Tone</h1>
        </div>
        <p>Unlock your maximum potential</p>
        <a
          href="https://apps.apple.com/app/id123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={appstore}
            className="apple-img"
            alt="Download on the App Store"
          />
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
              href="https://www.instagram.com/mytone.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="footer-links">
            <a
              href="mailto:mytoneofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a
              href={`${window.location.origin}/terms`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
            <a
              href={`${window.location.origin}/privacy`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a href="/">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
