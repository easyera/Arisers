import "./home.css";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import Service from "../../components/services/services";
import ContactSection from "../../components/contact/contact";
import Footer from "../../components/footer/footer";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Hero />
            <About />
            <Service />
            <ContactSection />
            <Footer />
        </div>
    );
}
