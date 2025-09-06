import React from 'react';
import WorkoutImage from '../../assets/images/workout.jpg';

const Workouts = () => (
  <section className="workout" id="workout">
    <div className="section-header">
      <h3>Workout Routines</h3>
      <h1>Burn, Flex And Reset</h1>
      <p>
        Check out the most effective exercises personalized to you. 
        Track your progress and achieve your fitness goals with our comprehensive workout plans.
      </p>
    </div>

    <div className="workout-content">
      <div className="workout-banner-container">
        <img src={WorkoutImage} alt="Fitness workout session" className="workout-banner" />
        <div className="workout-cta">
          <a href="#exercises" className="explore-button">Explore Exercises</a>
        </div>
      </div>
      <div className="workout-watermark">Exercise</div>
    </div>
  </section>
);

export default Workouts;