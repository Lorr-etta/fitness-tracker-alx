import aboutImg from "../assets/about-img.jpg";

const AboutUs = () => {
  return (
    <section id="about"  className="about-container">
      <div className="about-contents">
        <div className="about-left-col">
          <img src={aboutImg} alt="About Us" />
        </div>
        <div className="about-right-col">
          <h2>About Us</h2>
          <p>
            At Figure 8 Fitness, we believe every journey begins with a single
            step, and we’re here to walk that step with you. Our platform is
            designed to keep you motivated with dynamic workouts, progress
            tracking, and real results. Whether you’re lifting, running, or
            stretching, you’ll find the tools to stay consistent and inspired.
            We’re more than a fitness app — we’re a community of champions.
            Together, we celebrate wins, overcome challenges, and push each
            other to become stronger every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;