import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setMessage('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    // Simulate authentication
    setTimeout(() => {
      setIsSubmitting(false);
      if (isLogin) {
        setMessage('Login successful! Redirecting...');
        // Store simple auth state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', formData.email);
        setTimeout(() => navigate('/profile'), 1500);
      } else {
        setMessage('Account created successfully! Please login.');
        setIsLogin(true);
        setFormData(prev => ({ ...prev, confirmPassword: '', name: '' }));
      }
    }, 1000);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
  };

  return (
    <div className="login-page-container">
      {/* Background */}
      <div className="login-backdrop"></div>
      
      {/* Login Form */}
      <div className="login-form-popup">
        <div className="login-form-container">
          {/* Header */}
          <div className="login-header">
            <h2>{isLogin ? 'Welcome Back' : 'Join Figure 8'}</h2>
            <p>{isLogin ? 'Sign in to your account' : 'Create your fitness account'}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLogin}
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required={!isLogin}
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              className="auth-submit-button"
              disabled={isSubmitting}
            >
              <span className="button-text">
                {isSubmitting ? (isLogin ? 'Signing In...' : 'Creating Account...') : (isLogin ? 'Sign In' : 'Create Account')}
              </span>
              <div className="button-gradient"></div>
            </button>

            {/* Message */}
            {message && (
              <div className={`auth-message ${message.includes('successful') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </form>

          {/* Toggle Login/Signup */}
          <div className="auth-toggle">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button type="button" onClick={toggleMode} className="toggle-button">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {/* Demo Info */}
          <div className="demo-info">
            <p>Demo: Use any email and password to login</p>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .login-page-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .login-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(80, 169, 99, 0.9), rgba(249, 115, 22, 0.8));
          backdrop-filter: blur(10px);
        }

        .login-form-popup {
          position: relative;
          z-index: 1001;
          max-width: 450px;
          width: 100%;
          margin: 0 1rem;
        }

        .login-form-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: slideInUp 0.5s ease-out;
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-header h2 {
          color: #1f2937;
          font-size: 1.9rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #50a963, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .login-header p {
          color: #6b7280;
          font-size: 1rem;
        }

        .login-form {
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: #374151;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .form-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
          box-sizing: border-box;
        }

        .form-group input:focus {
          outline: none;
          border-color: #50a963;
          box-shadow: 0 0 0 3px rgba(80, 169, 99, 0.1);
          transform: translateY(-1px);
        }

        .auth-submit-button {
          position: relative;
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #50a963, #f97316);
          box-shadow: 0 4px 15px rgba(80, 169, 99, 0.3);
        }

        .auth-submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(80, 169, 99, 0.4);
        }

        .auth-submit-button:active {
          transform: translateY(0);
        }

        .auth-submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .button-text {
          position: relative;
          z-index: 2;
        }

        .button-gradient {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .auth-submit-button:hover .button-gradient {
          left: 100%;
        }

        .auth-message {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-top: 1rem;
          text-align: center;
        }

        .auth-message.success {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .auth-message.error {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
        }

        .auth-toggle {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
        }

        .auth-toggle p {
          color: #6b7280;
          font-size: 0.9rem;
          margin: 0;
        }

        .toggle-button {
          background: none;
          border: none;
          color: #50a963;
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.5rem;
          text-decoration: underline;
        }

        .toggle-button:hover {
          color: #22c55e;
        }

        .demo-info {
          text-align: center;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #f3f4f6;
        }

        .demo-info p {
          color: #9ca3af;
          font-size: 0.8rem;
          margin: 0;
          font-style: italic;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .login-form-container {
            padding: 2rem;
            margin: 1rem;
          }

          .login-header h2 {
            font-size: 1.6rem;
          }

          .form-group input {
            padding: 0.65rem 0.85rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .login-form-container {
            padding: 1.5rem;
            border-radius: 16px;
          }

          .login-header h2 {
            font-size: 1.4rem;
          }

          .auth-submit-button {
            padding: 0.9rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
