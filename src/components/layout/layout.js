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

  const location = useLocation();

  const isAdminPage = location.pathname === '/admin';
  const hideElements = ['/inscription', '/connexion', '/forgetPassword', '/admin'].includes(location.pathname);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
 
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
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
