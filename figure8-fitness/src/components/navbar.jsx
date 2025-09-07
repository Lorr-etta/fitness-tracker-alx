import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const showSidebar = () => setIsSidebarOpen(true);
  const hideSidebar = () => setIsSidebarOpen(false);
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
  const closeLogin = () => setIsLoginOpen(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    // Scroll to FloatingSocials or contact section
    const floatingSocials = document.querySelector('.fixed.bottom-4.right-4');
    if (floatingSocials) {
      floatingSocials.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav>
      {/* Sidebar */}
      <ul className="sidebar" style={{ display: isSidebarOpen ? 'flex' : 'none' }}>
        <li onClick={hideSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </a>
        </li>
        <li><Link to="/" onClick={hideSidebar}>Home</Link></li>
        <li><Link to="/about" onClick={hideSidebar}>About</Link></li>
        <li><Link to="/profile" onClick={hideSidebar}>Profile</Link></li>
        <li><a href="#contact" onClick={(e) => { handleContactClick(e); hideSidebar(); }} className="block py-2 px-4 rounded hover:bg-pink-600 transition-colors">Contact</a></li>
        <li><button onClick={() => { toggleLogin(); hideSidebar(); }} className="login-btn">Login</button></li>
      </ul>

      {/* Main Navbar */}
      <ul>
        <li className="logo">FIGURE 8</li>
        <li className="hideOnMobile"><Link to="/">Home</Link></li>
        <li className="hideOnMobile"><Link to="/about">About</Link></li>
        <li className="hideOnMobile"><Link to="/profile">Profile</Link></li>
        <li className="hideOnMobile"><a href="#contact" onClick={handleContactClick} className="hover:text-pink-200">Contact</a></li>
        <li className="hideOnMobile"><button onClick={toggleLogin} className="login-btn">Login</button></li>
        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </a>
        </li>
      </ul>
      
      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={closeLogin} />
      
      {/* Login Button Styles */}
      <style jsx>{`
        .login-btn {
          background: linear-gradient(135deg, #50a963, #f97316);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .login-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(80, 169, 99, 0.3);
        }
        
        .login-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
