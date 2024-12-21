import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FixeFooter from './fixeFooter';
import Chat from './Chat';
import CallButton from './Buttons/callButton';
import BrochureButton from './Buttons/brochureButton';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ScrollToTop from './ScrollToTop';
import { useLocation } from 'react-router-dom';

import './layout.css';

const Layout = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const location = useLocation();

  // Vérifie si la page est admin
  const isAdminPage = location.pathname === '/admin';
  const hideElements = ['/inscription', '/connexion', '/forgetPassword', '/admin'].includes(location.pathname);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev); // Garantit une bascule d'état propre
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div>
      <div className="layout-container">
        {/* Masque uniquement le Header et autres éléments supplémentaires sur la page admin */}
        {!isAdminPage && <Header />}

        <main>
          {children} {/* Affiche le contenu de la page admin ou d'autres pages */}

          {/* Affiche uniquement ces éléments si on n'est pas sur la page admin */}
          {!isAdminPage && !hideElements && (
            <>
              <div className="call"><ScrollToTop /></div>
              <div className="call"><CallButton /></div>
              <div className="call"><BrochureButton /></div>
            </>
          )}

          {/* Chatbot Toggle */}
          {!isAdminPage && !hideElements && (
            <div className="chatbot-container">
              <div className="chatbot-tooltip">
                <span className="tooltip-text" onClick={toggleChatbot}>Une question ? Nous sommes là pour vous aider !</span>
                <span className="tooltip-close" >✕</span>
              </div>
              <img
                src="/images/chatbot.png"
                alt="Chatbot"
                className="chat-icon"
                onClick={toggleChatbot}
              />


              {/* Rendu conditionnel du Chatbot (mémorisé avec React.memo) */}
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
