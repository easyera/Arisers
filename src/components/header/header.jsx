import { useState } from "react";
import "./header.css";
import logo from "../../assets/arisers-logo.png";
export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header className="header">
      <div className="innercontent-desktop">
        <div className="header-left">
          <div className="header-logo">
            <img src={logo} alt="logo" />
            <h1>arisers</h1>
          </div>
        </div>
        <div className="header-center">
          <div className="header-nav">
            <ul className="header-links">
              <li>
                <a href="/#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="/#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <div className="header-buttons">
            <button className="header-btn">
              <a href="#contact">Let’s Contact</a>
            </button>
          </div>
        </div>
      </div>
      <div className="innercontent-mobile">
        <div className="header-left">
          <div className="header-logo">
            <img src={logo} alt="logo" />
            <h1>arisers</h1>
          </div>
        </div>
        <div className="header-right">
          <div className="header-buttons" onClick={() => setisOpen(!isOpen)}>
            <button className={"header-menu" + `${isOpen ? " active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="pop-up">
            <ul className="pop-links">
              <li>
                <a href="#about" className="pop-link">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="pop-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/portfolio" className="pop-link">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
