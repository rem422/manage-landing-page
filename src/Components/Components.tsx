import Navbar from "./Navbar/Navbar.tsx";
import Hero from './Hero/Hero.tsx'
import Features from "./Features/Features.tsx";
import Testimonial from "./Testimonial/Testimonial.tsx";
import CTA from "./CTA/CTA.tsx";
import Footer from './Footer/Footer.tsx'
function Components() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Testimonial />
            <CTA />
            <Footer />
        </>
    );
}

export default Components;