import "./about.css";
import { TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-innercontent">
        <div className="about-header">
          <div className="about-box">
            <img
              src="https://images.pexels.com/photos/5240548/pexels-photo-5240548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="abouts_pic"
            />
            <div className="about-icons">
              <a href="">
                <TiSocialLinkedin className="icon" />
              </a>
              <a href="">
                <TiSocialInstagram className="icon" />
              </a>
              <a href="">
                <FaDiscord className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="about-footer">
          <h3>
            Arisers is a new, innovative company offering affordable and
            customizable web development and 3D media solutions. We help small
            businesses thrive with personalized tech support.
          </h3>
          <p>
            At Arisers, we specialize in delivering innovative, cost-effective
            solutions for web development and 3D media. Our team is dedicated to
            providing small businesses with customized, scalable support to
            enhance their digital presence and streamline operations, helping
            them grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
}
