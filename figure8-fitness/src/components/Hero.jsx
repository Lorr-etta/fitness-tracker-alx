import heroImage from "../assets/images/hero-fitness.jpg";

function Hero() {
  return (
    <section className="hero view">
      {/* Background image as <img> */}
      <img src={heroImage} alt="Hero background" className="hero-img" />

      {/* Content */}
      <div className="highlights">
        <h1>
          <span className="white">Your Fitness Journey</span>
          <span className="green"></span>
        </h1>
        <h2 className="fitness">Starts Here</h2>
        <p className="tagline">Track workouts, monitor progress, and
          achieve your goals with Figure 8 Fitness...
        </p>

        <button className="join">Join Now</button>
      </div>
    </section>
  );
}

export default Hero;