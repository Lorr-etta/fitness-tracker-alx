import React from "react";
import yogaIcon from "../assets/icons/yoga.svg";
import dietIcon from "../assets/icons/diet.svg";
import adviceIcon from "../assets/icons/advice.svg";
import trainerIcon from "../assets/icons/trainer.svg";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <h3>Services</h3>
        <h1>Services we Offer</h1>
        <p>
          Discover a range of personalized services designed to help you achieve your fitness goals. 
          Whether you’re building strength, improving flexibility, or seeking expert guidance, 
          we provide the tools and support you need to stay motivated and consistent on your fitness journey.
        </p>
      </div>

      <div className="services-contents">
        <div className="service-box">
          <div className="service-icon-box">
            <img src={yogaIcon} alt="Yoga" className="service-icon" />
          </div>
          <div className="service-desc">
            <h2>Yoga</h2>
            <p>
              Enhance your flexibility, balance, and inner peace with guided yoga routines. 
              Our sessions combine breathing techniques, mindful movements, 
              and posture training to help you relieve stress and improve overall well-being.
              </p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-icon-box">
            <img src={dietIcon} alt="Diet" className="service-icon" />
          </div>
          <div className="service-desc">
            <h2>Diet</h2>
            <p>
              Fuel your body with the right nutrition. Get personalized meal plans, calorie tracking, 
              and expert tips to make healthier food choices that align with your fitness and lifestyle goals.
            </p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-icon-box">
            <img src={trainerIcon} alt="Trainer" className="service-icon" />
          </div>
          <div className="service-desc">
            <h2>Virtual Coaching</h2>
            <p>
              Train anytime, anywhere with our virtual coaching sessions. Connect with certified trainers who provide live guidance, 
              workout corrections, and motivation—all from the comfort of your home or gym.
            </p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-icon-box">
            <img src={adviceIcon} alt="Advice" className="service-icon" />
          </div>
          <div className="service-desc">
            <h2>Expert Advice</h2>
            <p>
              Access expert knowledge on fitness, nutrition, and healthy living. 
              From workout techniques to lifestyle tips, our expert advice keeps you informed 
              and empowered to make the best decisions for your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;