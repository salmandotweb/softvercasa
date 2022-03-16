import React from "react";
import { Fade } from "react-awesome-reveal";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./ServiceSection.css";

function ServiceSection() {
  return (
    <section className="service-section" id="services">
      <Fade>
        <div className="service-section-title">
          <p>Our Services</p>
          <h1>What we offer</h1>
        </div>
      </Fade>
      <div className="service-card-container">
        <ServiceCard
          img="images/web-dev.svg"
          title="Web Development"
          description="With millions of websites on the internet you want to be sure your website stands out, represents you well, and most importantly, helps your organization grow."
        />
        <ServiceCard
          img="images/mobile-app.svg"
          title="Mobile App Development"
          description="We create enterprise and consumer level mobile applications that provide an engaging and sophisticated mobile experience on any device and platform you prefer."
        />
        <ServiceCard
          img="images/digital-marketing.svg"
          title="Digital Marketing"
          description="Social media marketing is a critical element in staying connected with your audience. Working independently of, or side-by-side with you, we help keep your social community engaged."
        />
        <ServiceCard
          img="images/seo.svg"
          title="SEO Optimization"
          description="Through careful keyword research and white hat practices, we can help you achieve high rankings in the major search engines."
        />
        <ServiceCard
          img="images/graphic-design.svg"
          title="Graphic Design"
          description="Really need some design inspiration? Someone who can use their creative skills to make a design that will really pop? These graphic design services may be just what you're looking for."
        />
        <ServiceCard
          img="images/wordpress.svg"
          title="Wordpress/Ecommerce"
          description="Grow Your E-Business With Our Fully Functional Ecommerce Services. Also Enjoy Our Personal Portfolios & Blogs With WordPress."
        />
      </div>
    </section>
  );
}

export default ServiceSection;
