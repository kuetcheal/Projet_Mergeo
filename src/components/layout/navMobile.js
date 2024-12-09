import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavMobile = ({ menuOpen, toggleMenu, t }) => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMobiliisMenu, setShowMobiliisMenu] = useState(false);
  const [showOffersMenu, setShowOffersMenu] = useState(false);
  const [showDestinationMenu, setShowDestinationMenu] = useState(false);

  return (
    <Drawer anchor="right" open={menuOpen} onClose={() => toggleMenu(false)}>
      <div className="drawer-menu">
        <CloseIcon className="close-icon" onClick={() => toggleMenu(false)} />
        <ul className="nav-list">
          <li className="navItem">
            <Link to="/" className="navLink" onClick={() => toggleMenu(false)}>
              {t('header.home')}
            </Link>
          </li>

          <li
            className="navItem"
            onMouseEnter={() => setShowServicesMenu(true)}
            onMouseLeave={() => setShowServicesMenu(false)}
            style={{ position: 'relative' }}
          >
            <Link to="#" className="navLink">
              {t('header.services')} <KeyboardArrowDownIcon />
            </Link>
            {showServicesMenu && (
              <ul className="subMenu">
                <li><Link to="/services/immigration" onClick={() => toggleMenu(false)}>{t('header.servicesImmigration')}</Link></li>
                <li><Link to="/services/accompagnement" onClick={() => toggleMenu(false)}>{t('header.servicesAccompagnement')}</Link></li>
                <li><Link to="/services/formation" onClick={() => toggleMenu(false)}>{t('header.servicesFormation')}</Link></li>
                <li><Link to="/services/informations" onClick={() => toggleMenu(false)}>{t('header.servicesInformations')}</Link></li>
              </ul>
            )}
          </li>

          <li
            className="navItem"
            onMouseEnter={() => setShowMobiliisMenu(true)}
            onMouseLeave={() => setShowMobiliisMenu(false)}
            style={{ position: 'relative' }}
          >
            <Link to="#" className="navLink">
              {t('header.mobiliis')} <KeyboardArrowDownIcon />
            </Link>
            {showMobiliisMenu && (
              <ul className="subMenu">
                <li><Link to="/presentation" onClick={() => toggleMenu(false)}>{t('header.presentation')}</Link></li>
                <li><Link to="/mobiliis/avantages" onClick={() => toggleMenu(false)}>{t('header.avantagesEmployes')}</Link></li>
              </ul>
            )}
          </li>

          <li className="navItem">
            <Link to="/contact" className="navLink" onClick={() => toggleMenu(false)}>
              {t('header.contact')}
            </Link>
          </li>
        </ul>
      </div>
    </Drawer>
  );
};

export default NavMobile;
