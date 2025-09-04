import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSidebar = () => setIsSidebarOpen(true);
  const hideSidebar = () => setIsSidebarOpen(false);

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
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Community</a></li>
      </ul>

      {/* Main Navbar */}
      <ul>
        <li className="logo">FIGURE 8</li>
        <li className="hideOnMobile"><a href="#">Home</a></li>
        <li className="hideOnMobile"><a href="#">About</a></li>
        <li className="hideOnMobile"><a href="#">Services</a></li>
        <li className="hideOnMobile"><a href="#">Contact</a></li>
        <li className="hideOnMobile"><a href="#">Community</a></li>
        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;