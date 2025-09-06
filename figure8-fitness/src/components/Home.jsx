import Hero from "./Hero";
import Features from "./Features"
import AboutUs from "./About";
import Services from "./Services";
import Workouts from "./WorkLogs/Workouts"
import SearchExercises from "./WorkLogs/SearchExercises";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <Workouts />
      <SearchExercises/>
    </div>
  );
}

export default Home;