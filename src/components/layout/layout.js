import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FixeFooter from './fixeFooter';
import Chat from './Chat';
import CallButton from './Buttons/callButton';
import BrochureButton from './Buttons/brochureButton';
import ScrollToTop from './ScrollToTop';
import { useLocation } from 'react-router-dom';

import './layout.css';

const Layout = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // ✅ nouveau state pour afficher/cacher le tooltip
  const [showTooltip, setShowTooltip] = useState(true);

  const location = useLocation();

  const isAdminPage = location.pathname === '/admin';
  const hideElements = ['/inscription', '/connexion', '/forgetPassword', '/admin'].includes(location.pathname);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
    // optionnel : si on ouvre le chatbot, on cache le tooltip
    setShowTooltip(false);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  const closeTooltip = (e) => {
    // ✅ éviter que le clic sur la croix déclenche toggleChatbot
    e.stopPropagation();
    setShowTooltip(false);
  };

  return (
    <div>
      <div className="layout-container">
        {!isAdminPage && <Header />}

        <main>
          {children}

          {!isAdminPage && !hideElements && (
            <>
              <div className="call"><ScrollToTop /></div>
              <div className="call"><CallButton /></div>
              <div className="call"><BrochureButton /></div>
            </>
          )}

          {/* Chatbot */}
          {!isAdminPage && !hideElements && (
            <div className="chatbot-container">
              {/* ✅ Tooltip affiché seulement si showTooltip = true */}
              {showTooltip && (
                <div className="chatbot-tooltip">
                  {/* le texte ouvre le chatbot */}
                  <span className="tooltip-text" onClick={toggleChatbot}>
                    Une question ? Nous sommes là pour vous aider !
                  </span>

                  {/* ✅ la croix ferme le tooltip */}
                  <button
                    type="button"
                    className="tooltip-close"
                    onClick={closeTooltip}
                    aria-label="Fermer"
                  >
                    ✕
                  </button>
                </div>
              )}

              <img
                src="/images/chatbot.png"
                alt="Chatbot"
                className="chat-icon"
                onClick={toggleChatbot}
              />

              <div className={`chatbot-popup ${isChatbotOpen ? 'open' : 'closed'}`}>
                {isChatbotOpen && <Chat closeChat={closeChatbot} />}
              </div>
            </div>
          )}
        </main>

        {!isAdminPage && <FixeFooter />}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
