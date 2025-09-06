import React, { useState, Suspense } from "react";
import Hero from "./Hero";
import Features from "./Features";
import AboutUs from "./About";
import Services from "./Services";
import Workouts from "./WorkLogs/Workouts";
const SearchExercises = React.lazy(() => import("./WorkLogs/SearchExercises"));
import HorizontalScrollbar from "./WorkLogs/HorizontalScrollbar";
import Exercises from "./WorkLogs/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [bodyParts, setBodyParts] = useState([]);

  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <Workouts />
      <Suspense fallback={<div style={{padding:20, textAlign:'center'}}>Loading search...</div>}>
        <SearchExercises 
          exercises={exercises}
          setExercises={setExercises} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart} 
          bodyParts={bodyParts} 
          setBodyParts={setBodyParts}
        />
      </Suspense>
      <section className="goals-section">
        <div className="goals-header">
          <h2 className="goals-title">Target Your <span>Goals</span></h2>
          <p className="goals-subtitle">Select a body part to filter exercises and focus your workout</p>
        </div>
        <div className="scrollbar-container">
          <HorizontalScrollbar 
            data={bodyParts} 
            bodyParts={true} 
            setBodyPart={setBodyPart} 
            bodyPart={bodyPart}
          />
        </div>
      </section>
      {/* Removed bottom exercises horizontal scroller as requested */}
    </div>
  );
};

export default Home;