import "./about.css";
import { TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-innercontent">
        <div className="about-header">
          <div className="about-box">
            <img src="https://images.pexels.com/photos/5240548/pexels-photo-5240548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="abouts_pic" />
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
            I’m John Smith. I’m passionate about crafting exceptional websites.
            With a blend of design skills and coding expertise, I create unique
            online experiences that captivate users.
          </h3>
          <p>
            Looking for a top-notch web developer to revamp your hotel’s
            website? Look no further than John Smith. With years of experience
            and a keen eye for design, John can take your site to the next
            level, helping you attract more visitors and boost your bookings.
          </p>
        </div>
      </div>
    </div>
  );
}
