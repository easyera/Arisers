import "./hero.css";

export default function Hero() {
    return(
        <div className="Hero-section">
            <div className="hero-innercontent">
                <div className="hero-header">
                    <h1>Reliable Tech Support for Small Businesses</h1>
                    <p>Affordable, fast, and tailored tech solutions for SMB success everywhere.</p>
                </div>
                <div className="hero-footer">
                    <button className="hero-btn-primary">
                        <a href="#contact">Let’s Contact</a>
                    </button>
                    <button className="hero-btn-secondary">
                        <a href="/portfolio">Check Our Work</a>
                    </button>
                </div>
            </div>
        </div>
    )
}