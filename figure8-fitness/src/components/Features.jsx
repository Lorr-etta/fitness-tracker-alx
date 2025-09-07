import DumbbellIcon from '../assets/icons/dumbbell.svg';
import ProgressIcon from '../assets/icons/progress.svg';
import ServicesIcon from '../assets/icons/services.svg';
import CommunityIcon from '../assets/icons/community.svg';
import { Link } from 'react-router-dom';

const Features = () => {

    return (
        <div className="features-container relative -mt-24 md:-mt-32 z-20 px-4">
            <Link to="/workouts" className="feature-item cursor-pointer hover:shadow-lg" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="feature-icon">
                    <img src={DumbbellIcon} alt="Workouts icon" className="w-12 h-12 mx-auto" />
                    <i className="fa-solid fa-dumbbell"></i>
                </div>
                <div className="feature-content">
                    <h3>Workouts</h3>
                    <p>Discover a variety of exercises, get expert tips, and follow videos and image demonstrations to perfect your routine and stay consistent.</p>
                </div>
            </Link>

            <Link to="/dashboardpage" className="feature-item cursor-pointer hover:shadow-lg" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="feature-icon">
                     <img src={ProgressIcon} alt="Progress Tracking icon" className="w-12 h-12 mx-auto" />
                     <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="feature-content">
                    <h3>Progress Tracking</h3>
                    <p>Log Workouts and Track your improvements over time with visual charts and statistics to keep you motivated.</p>
                </div>
            </Link>

            <Link to="/services" className="feature-item cursor-pointer hover:shadow-lg" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="feature-icon">
                    <img src={ServicesIcon} alt="Services icon" className="w-12 h-12 mx-auto" />
                    <i className="fa-solid fa-handshake-angle"></i>
                </div>
                <div className="feature-content">
                    <h3>Services</h3>
                    <p>Access personalized workout plans, nutrition advice, and expert guidance to achieve your fitness goals.</p>
                </div>
            </Link>

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