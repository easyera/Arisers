import "./footer.css";
import { TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Let’s connect and create something amazing with Arisers!</h1>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/">
            <TiSocialLinkedin className="icon-footer" />
          </a>
          <a href="">
            <TiSocialInstagram className="icon-footer" />
          </a>
          <a href="">
            <FaDiscord className="icon-footer" />
          </a>
        </div>
      </div>
      <p className="copyright">&copy; 2023 arisers</p>
    </div>
  );
}
