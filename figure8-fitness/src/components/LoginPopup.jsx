import React, { useState } from 'react';

const LoginPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    setSubmitMessage('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Message sent successfully!');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitMessage('');
        onClose();
      }, 2000);
    }, 1000);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay" onClick={handleBackdropClick}>
      <div className="login-popup-container">
        <div className="login-popup-header">
          <h2>Get in Touch</h2>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="login-popup-form">
          <div className="form-field">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              rows="4"
              required
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            <span className="button-text">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <div className="button-shine"></div>
          </button>

          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('success') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>

      <style jsx>{`
        .login-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 2rem;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .login-popup-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 2rem;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: slideInLeft 0.4s ease-out;
          position: relative;
        }

        .login-popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .login-popup-header h2 {
          color: #1f2937;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #50a963, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #374151;
        }

        .login-popup-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
        }

        .form-field label {
          color: #374151;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .form-field input,
        .form-field textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
          box-sizing: border-box;
          font-family: inherit;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          outline: none;
          border-color: #50a963;
          box-shadow: 0 0 0 3px rgba(80, 169, 99, 0.1);
          transform: translateY(-1px);
        }

        .form-field textarea {
          resize: vertical;
          min-height: 80px;
        }

        .submit-button {
          position: relative;
          padding: 0.9rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #50a963, #f97316);
          box-shadow: 0 4px 15px rgba(80, 169, 99, 0.3);
          margin-top: 0.5rem;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(80, 169, 99, 0.4);
          animation: buttonPop 0.3s ease-out;
        }

        .submit-button:active {
          transform: translateY(0);
          animation: buttonPop 0.2s ease-out;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .button-text {
          position: relative;
          z-index: 2;
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .submit-button:hover .button-shine {
          left: 100%;
        }

        .submit-message {
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
          margin-top: 0.5rem;
        }

        .submit-message.success {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .submit-message.error {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes buttonPop {
          0% { transform: translateY(-2px) scale(1); }
          50% { transform: translateY(-4px) scale(1.05); }
          100% { transform: translateY(-2px) scale(1); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .login-popup-overlay {
            padding-left: 1rem;
            padding-right: 1rem;
            justify-content: center;
          }

          .login-popup-container {
            max-width: none;
            width: calc(100% - 2rem);
            padding: 1.5rem;
          }

          .login-popup-header h2 {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .login-popup-overlay {
            padding: 1rem;
          }

          .login-popup-container {
            width: 100%;
            padding: 1.25rem;
            border-radius: 12px;
          }

          .form-field input,
          .form-field textarea {
            padding: 0.65rem;
            font-size: 0.85rem;
          }

          .submit-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPopup;
