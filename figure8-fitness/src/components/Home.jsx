import Hero from "./Hero";
import Features from "./Features"
import AboutUs from "./About";
import Services from "./Services";
import Workouts from "./Workouts"

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <Workouts />
    </div>
  );
}

export default Home;