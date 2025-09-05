import React from 'react';
import DumbbellIcon from '../assets/dumbbell.svg';
import ProgressIcon from '../assets/progress.svg';
import ServicesIcon from '../assets/services.svg';
import CommunityIcon from '../assets/community.svg';

const Features = () => {
    return (
        <div className="features-container relative -mt-32 z20 px-4">
            <div className="feature-item">
                <div className="feature-icon">
                    <img src={DumbbellIcon} alt="Workouts icon" className="w-12 h-12 mx-auto" />
                    <i className="fa-solid fa-dumbbell"></i>
                </div>
                <div className="feature-content">
                    <h3>Workouts</h3>
                    <p>Log workouts, monitor your progress, and see your fitness journey in real time with detailed progress reports.</p>
                </div>
            </div>

            <div className="feature-item">
                <div className="feature-icon">
                     <img src={ProgressIcon} alt="Progress Tracking icon" className="w-12 h-12 mx-auto" />
                     <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="feature-content">
                    <h3>Progress Tracking</h3>
                    <p>Track your improvements over time with visual charts and statistics to keep you motivated.</p>
                </div>
            </div>

            <div className="feature-item">
                <div className="feature-icon">
                    <img src={ServicesIcon} alt="Services icon" className="w-12 h-12 mx-auto" />
                    <i className="fa-solid fa-handshake-angle"></i>
                </div>
                <div className="feature-content">
                    <h3>Services</h3>
                    <p>Access personalized workout plans, nutrition advice, and expert guidance to achieve your fitness goals.</p>
                </div>
            </div>

            <div className="feature-item">
                <div className="feature-icon">
                    <img src={CommunityIcon} alt="Community icon" className="w-12 h-12 mx-auto" />
                    <i className="fa-solid fa-users"></i>
                </div>
                <div className="feature-content">
                    <h3>Community</h3>
                    <p>Connect with like-minded fitness enthusiasts, share achievements, and participate in challenges.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;