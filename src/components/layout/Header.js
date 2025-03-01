import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMobiliisMenu, setShowMobiliisMenu] = useState(false);
  const [showOffersMenu, setShowOffersMenu] = useState(false);
  const [showDestinationMenu, setShowDestinationMenu] = useState(false);
  const [showCoursMenu, setShowCoursMenu] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch('/api/check-session', {
        method: 'GET',
        credentials: 'include'
      });
      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include'
    });
    setIsLoggedIn(false);
    console.log('Déconnexion réussie');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // gestion des sous-menus
  const handleMouseEnter = () => {
    setShowServicesMenu(true);
  };
  const handleMouseLeave = () => {
    setShowServicesMenu(false);
  };

  const handleMouseCours= () => {
    setShowCoursMenu(true);
  };
  const handleMouseCoursLeave = () => {
    setShowCoursMenu(false);
  };

  const handleMobiliisMouseEnter = () => {
    setShowMobiliisMenu(true);
  };
  const handleMobiliisMouseLeave = () => {
    setShowMobiliisMenu(false);
  };

  const handleOffersMouseEnter = () => {
    setShowOffersMenu(true);
  };
  const handleOffersMouseLeave = () => {
    setShowOffersMenu(false);
  };
  const handleDestinationMouseEnter = () => {
    setShowDestinationMenu(true);
  };
  const handleDestinationMouseLeave = () => {
    setShowDestinationMenu(false);
  };
  return (

    <>

      {menuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      <header className='head'>
        <div className="header-infos">
          <div className="tel">
            <div className="phone-numbers">
            <span> <CallIcon className="phone-icon" />  </span>
              <span>{t('header.phone1')}</span>
              <span>{t('header.phone2')}</span>
              <span>{t('header.phone3')}</span>

            </div>
          </div>
          <div className="informat">
            <div className="email" sytle={{ color: 'white' }}><p><MailOutlineIcon /> {t('header.email')}</p></div>
            <div className="lieu"><p><PlaceIcon /> {t('header.position')}</p></div>
          </div>
        </div>

        <div className="header-main">
          <div className="logo">
            <img src="/images/Manitour.png" alt="Mobiliis Logo" className="logoImage" />
            <h4 className="slogan">Mobiliis</h4>
          </div>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>

            <CloseIcon className="close-icon" onClick={toggleMenu} />

            <ul className="nav-list">
              <li className="navItem">
                <Link to="#" className="navLink" >{t('header.home')}</Link>
              </li>


              <li
                className="navItem"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}
              >
                <Link to="#" className="navLink">
                  {t('header.services')} <KeyboardArrowDownIcon />
                </Link>
                {showServicesMenu && (
                  <ul className="subMenu">
                     <li><Link to="financeEtudiant">Préfinancement Etudiant</Link></li>
                    <li><Link to="/services/immigration">Accompagnement & Services d'immigration</Link></li>
                    <li><Link to="coaching">Coaching & Orientation scolaire</Link></li>
                    <li><Link to="/admission">Demande d'admission</Link></li>
                    <li><Link to="/services/formation">Demande de Visa</Link></li>
                    <li><Link to="avi"> AVI + Assurances voyage</Link></li>
                    <li><Link to="/services/avantages">Prise en charge Etudiant</Link></li>
                    <li><Link to="/logement">Recherche logement</Link></li>
                  </ul>
                )}
              </li>
              
              <li
                className="navItem"
                onMouseEnter={handleMouseCours}
                onMouseLeave={handleMouseCoursLeave}
                style={{ position: 'relative' }}
              >
                <Link to="#" className="navLink">
                  Cours Langues <KeyboardArrowDownIcon />
                </Link>
                {showCoursMenu && (
                  <ul className="subMenu">
                    <li><Link to="/coursAnglais">Cours d'anglais: IELTS, TOEFL</Link></li>
                    <li><Link to="/CoursAllemand">Cours d'Allemand: DSH, TestDaf</Link></li>
                    <li><Link to="/CoursFrançais">Tests de Langue: TCF, TEF, DALF, DELF, TEF Canada</Link></li>
                    <li><Link to="/coursAnglais">Cours d'Espagnol</Link></li>
                    
                  </ul>
                )}
              </li>

              <li
                className="navItem"
                onMouseEnter={handleMobiliisMouseEnter}
                onMouseLeave={handleMobiliisMouseLeave}
                style={{ position: 'relative' }}
              >
                <Link to="#" className="navLink">
                  {t('header.mobiliis')} <KeyboardArrowDownIcon />
                </Link>
                {showMobiliisMenu && (
                  <ul className="subMenu">
                    <li><Link to="/presentation">Présentation</Link></li>
                    <li><Link to="/mobiliis/avantages">Nos avantages employés</Link></li>
                    <li><Link to="/mobiliis/partenariats">Nos partenariats</Link></li>
                  </ul>
                )}
              </li>

              <li
                className="navItem"
                onMouseEnter={handleOffersMouseEnter}
                onMouseLeave={handleOffersMouseLeave}
                style={{ position: 'relative' }}
              >
                <Link to="#" className="navLink">
                  {t('header.offers')} <KeyboardArrowDownIcon />
                </Link>
                {showOffersMenu && (
                  <ul className="subMenu">
                    <li><Link to="/offreEmploi">Offres d'emploi</Link></li>
                    <li><Link to="/offers/offer2">Processus recrutement</Link></li>
                    <li><Link to="/offers/offer3">témoignages</Link></li>
                  </ul>
                )}
              </li>

              <li  className="navItem"
                onMouseEnter={handleDestinationMouseEnter}
                onMouseLeave={handleDestinationMouseLeave}
                style={{ position: 'relative' }}>
                <Link to="/medecin" className="navLink" >{t('header.destinations')}<KeyboardArrowDownIcon />
                </Link>
                {showDestinationMenu && (
                  <ul className="subMenu">
                    <li><Link to="/canada">Canada</Link></li>
                    <li><Link to="/france">France</Link></li>
                    <li><Link to="/allemagne">Allemagne</Link></li>
                    <li><Link to="/belgique">Belgique</Link></li>
                    <li><Link to="/espagne">ESpagne</Link></li>
                  </ul>
                )}
              </li>
              <li className="navItem">
                <Link to="/contact" className="navLink" >Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="avatarContainer">
            <div
              className="langIconContainer"
              onMouseEnter={() => setShowLangMenu(true)}
              onMouseLeave={() => setShowLangMenu(false)}
            >
              <LanguageIcon style={{ width: "40px", height: "40px", marginRight: "10px", color: "#004080", cursor: "pointer" }} />

              {showLangMenu && (
                <div className="langMenu">
                  <p onClick={() => changeLanguage('fr')}>FRA</p>
                  <p onClick={() => changeLanguage('en')}>ANG</p>
                </div>
              )}
            </div>

            <div
              className="profileIconContainer"
              onMouseEnter={() => setShowProfileMenu(true)}
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <PersonIcon style={{ width: "60px", height: "60px", marginRight: "10px", color: "#004080", cursor: "pointer" }} />

              {showProfileMenu && (
                <div className="dropdownMenu" style={{backgroundColor: 'white', width:'150px', height:'100px'}}>
                  <li><Link to="/inscrption">s'inscrire</Link></li>
                    <li><Link to="/connexion">Se connecter</Link></li>
                    <li><Link to="/allemagne">Mon compte</Link></li>
                </div>
              )}
            </div>

            <div className="burger-container">
              {menuOpen ? (
                <CloseIcon className="burger-icon" onClick={toggleMenu} style={{ color: "#004080" }} />
              ) : (
                <MenuIcon className="burger-icon" onClick={toggleMenu} style={{ color: "#004080" }} />
              )}
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
