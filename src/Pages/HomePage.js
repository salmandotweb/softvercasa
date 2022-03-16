import React from "react";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import AboutSection from "../Components/AboutSection/AboutSection";
import WhySection from "../Components/WhySection/WhySection";
import ServiceSection from "../Components/ServiceSection/ServiceSection";
import CounterBanner from "../Components/CounterBanner/CounterBanner";
import SolutionSection from "../Components/SolutionSection/SolutionSection";
import TeamSection from "../Components/TeamSection/TeamSection";
import ContactSection from "../Components/ContactSection/ContactSection";
import "./HomePage.css";
import Footer from "../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <Header />
      <WhySection />
      <AboutSection />
      <ServiceSection />
      <CounterBanner />
      <SolutionSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
