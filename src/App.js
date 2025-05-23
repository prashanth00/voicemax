import React from "react";
import "./App.css"; // Import your CSS file
import { FaTiktok, FaInstagram } from "react-icons/fa6"; // Import icons from react-icons
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
          href="https://apps.apple.com/app/mytone-sound-better/id6743761697"
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
              href="https://www.tiktok.com/@mytone.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
