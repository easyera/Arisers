import "./hero.css";

export default function Hero() {
    return(
        <div className="Hero-section">
            <div className="hero-innercontent">
                <div className="hero-header">
                    <h1>Freelance web developer based in New York</h1>
                    <p>Expert development services by NYC-based freelancer for your website needs.</p>
                </div>
                <div className="hero-footer">
                    <button className="hero-btn-primary">
                        <a href="#contact">Let’s Contact</a>
                    </button>
                    <button className="hero-btn-secondary">
                        <a href="#portfolio">Check Our Work</a>
                    </button>
                </div>
            </div>
        </div>
    )
}