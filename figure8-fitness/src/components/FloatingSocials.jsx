import React from 'react';

const FloatingSocials = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback to hash navigation
      window.location.hash = '#contact';
    }
  };

  return (
    <>
      {/* Enhanced Floating Social Icons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3" aria-label="Floating social links">
        {/* Instagram Icon */}
        <div className="floating-social-item group">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            title="Instagram"
            className="floating-icon instagram-icon"
          >
            <div className="icon-inner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div className="floating-glow instagram-glow"></div>
          </a>
        </div>

        {/* TikTok Icon */}
        <div className="floating-social-item group">
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TikTok"
            title="TikTok"
            className="floating-icon tiktok-icon"
          >
            <div className="icon-inner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M21 8.5c-2.4 0-4.5-1.2-5.8-3v9.1c0 3.5-2.9 6.4-6.4 6.4S2.5 18.1 2.5 14.6s2.9-6.4 6.4-6.4c.6 0 1.2.1 1.8.3v3.3c-.6-.3-1.1-.4-1.8-.4-1.8 0-3.3 1.5-3.3 3.3S7.1 18 8.9 18s3.3-1.5 3.3-3.3V2h3.2c.7 2.3 2.8 4 5.3 4.3V8.5z"/>
              </svg>
            </div>
            <div className="floating-glow tiktok-glow"></div>
          </a>
        </div>

        {/* Contact Icon */}
        <div className="floating-social-item group">
          <a
            href="#contact"
            onClick={handleContactClick}
            aria-label="Contact"
            title="Contact Us"
            className="floating-icon contact-icon"
          >
            <div className="icon-inner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 21s-6.716-3.77-9.257-7.63C.793 11.006 1.76 7.6 4.824 6.25 7.05 5.26 9.31 6.01 12 8.5c2.69-2.49 4.95-3.24 7.176-2.25 3.064 1.35 4.03 4.756 1.257 7.12C18.716 17.23 12 21 12 21z" />
              </svg>
            </div>
            <div className="floating-glow contact-glow"></div>
          </a>
        </div>
      </div>

      {/* CSS Styles for Enhanced Floating Animation */}
      <style jsx>{`
        .floating-social-item {
          position: relative;
          animation: float 3s ease-in-out infinite;
        }

        .floating-social-item:nth-child(1) {
          animation-delay: 0s;
        }

        .floating-social-item:nth-child(2) {
          animation-delay: 1s;
        }

        .floating-social-item:nth-child(3) {
          animation-delay: 2s;
        }

        .floating-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          cursor: pointer;
          overflow: hidden;
        }

        .icon-inner {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
          transform: translateZ(10px);
        }

        .floating-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0.8;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .instagram-icon {
          background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040, #f77737, #fcaf45, #ffdc80);
          color: white;
          box-shadow: 0 4px 15px rgba(225, 48, 108, 0.4);
        }

        .instagram-glow {
          background: radial-gradient(circle, rgba(225, 48, 108, 0.3) 0%, transparent 70%);
        }

        .tiktok-icon {
          background: linear-gradient(45deg, #000000, #ff0050, #00f2ea);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 0, 80, 0.4);
        }

        .tiktok-glow {
          background: radial-gradient(circle, rgba(255, 0, 80, 0.3) 0%, transparent 70%);
        }

        .contact-icon {
          background: linear-gradient(45deg, #50a963, #4ade80, #22d3ee);
          color: white;
          box-shadow: 0 4px 15px rgba(80, 169, 99, 0.4);
        }

        .contact-glow {
          background: radial-gradient(circle, rgba(80, 169, 99, 0.3) 0%, transparent 70%);
        }

        .floating-icon:hover {
          transform: translateY(-5px) scale(1.1) rotateY(15deg);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .floating-icon:hover .icon-inner {
          transform: translateZ(20px) rotateY(-5deg);
        }

        .floating-icon:hover .floating-glow {
          opacity: 1;
          transform: scale(1.4);
        }

        .floating-icon:active {
          transform: translateY(-2px) scale(1.05);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(2deg);
          }
          66% {
            transform: translateY(-5px) rotate(-2deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .fixed.bottom-4.right-4 {
            bottom: 1rem;
            right: 0.75rem;
          }
          
          .floating-icon {
            width: 48px;
            height: 48px;
          }
        }

        @media (max-width: 480px) {
          .fixed.bottom-4.right-4 {
            bottom: 0.75rem;
            right: 0.5rem;
          }
          
          .floating-icon {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingSocials;