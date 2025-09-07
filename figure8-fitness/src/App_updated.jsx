import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import DashboardPage from "./components/DashboardPage";
import WorkoutsPage from "./components/WorkoutsPage";
import Services from "./components/Services";
import Features from "./components/Features";
import About from "./components/About";
import Navbar from "./components/navbar";
import FloatingSocials from './components/FloatingSocials';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/dashboard' && location.pathname !== '/dashboardpage';
  
  return (
    <ErrorBoundary>
      <Navbar />
      <FloatingSocials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* Dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
        {/* New routes */}
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooter && <Footer />}
    </ErrorBoundary>
  );
}

export default App;
