import "./portfolio.css";
import Portcard from "../../components/portfoliocard/portcard";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import AKM from "../../assets/sites/AKM.jpeg";
import POOJiYAM from "../../assets/sites/POOJiYAM.jpeg";
import YUGAVRITTAH from "../../assets/sites/YUGAVRITTAH.jpeg";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio-header">
                <a href="/">
                <IoArrowBackCircleSharp className="icon-port-main" />
                </a>
                <h1>Our works</h1>
            </div>
            <div className="portfolio-section">
                <Portcard image={AKM} title="AKM" description="landing page for AKM Mighty Wheels Logistics" link="https://easyera.github.io/Equi-solution/" />
                <Portcard image={POOJiYAM} title="AKM" description="landing page for poojiyam innovations" link="/" />
                <Portcard image={YUGAVRITTAH} title="YUGAVRITTAH" description="landing page for college students intiative YUGAVRITTAH" link="/" />
            </div>
        </div>
    );
}