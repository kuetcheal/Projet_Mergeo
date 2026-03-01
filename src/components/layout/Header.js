import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


import "./Header.css";

const Header = () => {
  const { i18n, t } = useTranslation();

  // Desktop dropdown hover
  const [openDD, setOpenDD] = useState(null); // "services" | "courses" | ...

  // Mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSub, setActiveSub] = useState(null); // { key, label, items[] } | null

  // Right icons
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const currentLangLabel = useMemo(
    () => (i18n.language?.startsWith("fr") ? "FRA" : "ANG"),
    [i18n.language]
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);

  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveSub(null);
  };

  const openSubMenu = (sub) => {
    setActiveSub(sub);
  };

  // ---------- Menu config (source unique) ----------
  const menu = useMemo(() => {
    return [
      { key: "home", label: t("header.home"), to: "/" },

      {
        key: "services",
        label: t("sous-menu.services"),
        children: [
          { label: t("sous-menu.servicesPrefinance"), to: "/financeEtudiant" },
          { label: t("sous-menu.servicesImmigration"), to: "/services/immigration" },
          { label: t("sous-menu.servicesCoaching"), to: "/coaching" },
          { label: t("sous-menu.servicesAdmission"), to: "/admission" },
          { label: t("sous-menu.servicesVisa"), to: "/services/formation" },
          { label: t("sous-menu.servicesAvi"), to: "/avi" },
          { label: t("sous-menu.servicesSupport"), to: "/services/avantages" },
          { label: t("sous-menu.servicesHousing"), to: "/logement" },
        ],
      },

      {
        key: "courses",
        label: t("sous-menu.courses"),
        children: [
           { label: t("sous-menu.french"), to: "/CoursFrançais" },
          { label: t("sous-menu.english"), to: "/coursAnglais" },
          { label: t("sous-menu.german"), to: "/CoursAllemand" },
        ],
      },

      {
        key: "mobiliis",
        label: t("sous-menu.mobiliis"),
        children: [
          { label: t("sous-menu.mobiliisPresentation"), to: "/presentation" },
          { label: t("sous-menu.mobiliisAdvantages"), to: "/mobiliis/avantages" },
          { label: t("sous-menu.mobiliisPartners"), to: "/mobiliis/partenariats" },
        ],
      },

      {
        key: "offers",
        label: t("sous-menu.offers"),
        children: [
          { label: t("sous-menu.offersJobs"), to: "/offreEmploi" },
          { label: t("sous-menu.offersProcess"), to: "/offers/offer2" },
          { label: t("sous-menu.offersTestimonials"), to: "/offers/offer3" },
        ],
      },

      {
        key: "destinations",
        label: t("sous-menu.destinations"),
        children: [
          { label: "Canada", to: "/canada" },
          { label: "France", to: "/france" },
          { label: t("sous-menu.germany"), to: "/allemagne" },
          { label: t("sous-menu.belgium"), to: "/belgique" },
          { label: t("sous-menu.spain"), to: "/espagne" },
        ],
      },

      { key: "contact", label: t("sous-menu.contact"), to: "/contact" },
    ];
  }, [t]);

  return (
    <header>

      <div className="topbar d-none d-lg-block">
        <Container className="topbar-inner">
          <div className="topbar-left">
            <CallIcon className="topbar-icon" />
            <span className="topbar-text">{t("header.phone1")}</span>
            <span className="topbar-text">{t("header.phone2")}</span>
            <span className="topbar-text">{t("header.phone3")}</span>
          </div>

          <div className="topbar-right">
            <div className="topbar-item">
              <MailOutlineIcon className="topbar-icon" />
              <span className="topbar-text">{t("header.email")}</span>
            </div>
            <div className="topbar-item">
              <PlaceIcon className="topbar-icon" />
              <span className="topbar-text">{t("header.position")}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* NAVBAR (desktop) + mobile header row */}
      <Navbar expand="lg" bg="white" variant="light" className="mainnav" sticky="top">
        <Container>
          {/* Brand */}
          <Navbar.Brand as={Link} to="/" className="brand brand-vertical" onClick={closeMobileMenu}>
            <img src="/images/Manitour.png" alt="Mobiliis" className="brand-logo" />
            <span className="brand-name">Mobiliis</span>
          </Navbar.Brand>

          {/* Mobile right: icons + burger */}
          <div className="mobile-actions d-lg-none">
            <div
              className="icon-btn"
              onClick={() => setShowLangMenu((v) => !v)}
              aria-label="Langue"
              role="button"
            >
              <LanguageIcon />
              <span className="icon-dd-label">{currentLangLabel}</span>

              {showLangMenu && (
                <div className="mini-pop">
                  <button type="button" onClick={() => changeLanguage("fr")}>FRA</button>
                  <button type="button" onClick={() => changeLanguage("en")}>ANG</button>
                </div>
              )}
            </div>

            <div
              className="icon-btn"
              onClick={() => setShowProfileMenu((v) => !v)}
              aria-label="Profil"
              role="button"
            >
              <PersonIcon style={{ fontSize: 34 }} />

              {showProfileMenu && (
                <div className="mini-pop">
                  <Link to="/inscription" onClick={closeMobileMenu}>s'inscrire</Link>
                  <Link to="/connexion" onClick={closeMobileMenu}>Se connecter</Link>
                  <Link to="/allemagne" onClick={closeMobileMenu}>Mon compte</Link>
                </div>
              )}
            </div>

            <button
              className="burger-btn"
              type="button"
              onClick={() => {
                setMobileOpen(true);
                setShowLangMenu(false);
                setShowProfileMenu(false);
              }}
              aria-label="Ouvrir le menu"
            >
              <MenuIcon />
            </button>
          </div>

          {/* Desktop nav */}
          <Navbar.Collapse id="main-navbar" className="mainnav-collapse d-none d-lg-flex">
            <Nav className="mainnav-center mx-auto gap-lg-3">
              {/* Home */}
              <Nav.Link as={NavLink} to="/" end>
                {t("header.home")}
              </Nav.Link>

              {/* SERVICES */}
              <NavDropdown
                title={t("sous-menu.services")}
                id="services-dd"
                show={openDD === "services"}
                onMouseEnter={() => setOpenDD("services")}
                onMouseLeave={() => setOpenDD(null)}
              >
                {menu.find((m) => m.key === "services")?.children?.map((it) => (
                  <NavDropdown.Item as={Link} to={it.to} key={it.to}>
                    {it.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* COURSES */}
              <NavDropdown
                title={t("sous-menu.courses")}
                id="courses-dd"
                show={openDD === "courses"}
                onMouseEnter={() => setOpenDD("courses")}
                onMouseLeave={() => setOpenDD(null)}
              >
                {menu.find((m) => m.key === "courses")?.children?.map((it) => (
                  <NavDropdown.Item as={Link} to={it.to} key={it.to}>
                    {it.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* MOBILIIS */}
              <NavDropdown
                title={t("sous-menu.mobiliis")}
                id="mobiliis-dd"
                show={openDD === "mobiliis"}
                onMouseEnter={() => setOpenDD("mobiliis")}
                onMouseLeave={() => setOpenDD(null)}
              >
                {menu.find((m) => m.key === "mobiliis")?.children?.map((it) => (
                  <NavDropdown.Item as={Link} to={it.to} key={it.to}>
                    {it.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* OFFERS */}
              <NavDropdown
                title={t("sous-menu.offers")}
                id="offers-dd"
                show={openDD === "offers"}
                onMouseEnter={() => setOpenDD("offers")}
                onMouseLeave={() => setOpenDD(null)}
              >
                {menu.find((m) => m.key === "offers")?.children?.map((it) => (
                  <NavDropdown.Item as={Link} to={it.to} key={it.to}>
                    {it.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* DEST */}
              <NavDropdown
                title={t("sous-menu.destinations")}
                id="dest-dd"
                show={openDD === "destinations"}
                onMouseEnter={() => setOpenDD("destinations")}
                onMouseLeave={() => setOpenDD(null)}
              >
                {menu.find((m) => m.key === "destinations")?.children?.map((it) => (
                  <NavDropdown.Item as={Link} to={it.to} key={it.to}>
                    {it.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* CONTACT */}
              <Nav.Link as={NavLink} to="/contact">
                {t("sous-menu.contact")}
              </Nav.Link>
            </Nav>

            {/* Desktop right icons */}
            <Nav className="mainnav-right ms-lg-3 align-items-lg-center gap-2">
              <NavDropdown
                align="end"
                id="lang-dd"
                className="dd-icon"
                show={showLangMenu}
                onMouseEnter={() => setShowLangMenu(true)}
                onMouseLeave={() => setShowLangMenu(false)}
                onToggle={(isOpen) => setShowLangMenu(isOpen)}
                title={
                  <span className="icon-dd" aria-label="Langue">
                    <LanguageIcon />
                    <span className="icon-dd-label">{currentLangLabel}</span>
                  </span>
                }
              >
                <NavDropdown.Item onClick={() => changeLanguage("fr")}>FRA</NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage("en")}>ANG</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                align="end"
                id="profile-dd"
                className="dd-icon"
                show={showProfileMenu}
                onMouseEnter={() => setShowProfileMenu(true)}
                onMouseLeave={() => setShowProfileMenu(false)}
                onToggle={(isOpen) => setShowProfileMenu(isOpen)}
                title={
                  <span className="icon-dd" aria-label="Profil">
                    <PersonIcon style={{ fontSize: 40 }} />
                  </span>
                }
              >
                <NavDropdown.Item as={Link} to="/inscription">
                  s'inscrire
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/connexion">
                  Se connecter
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/allemagne">
                  Mon compte
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== Mobile Drawer + Backdrop ===== */}
      <div className={`mobile-backdrop ${mobileOpen ? "is-open" : ""}`} onClick={closeMobileMenu} />

      <aside className={`mobile-drawer ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        {/* Drawer header row */}
        <div className="drawer-top">
          {activeSub ? (
            <button
              type="button"
              className="drawer-icon-btn"
              aria-label="Retour"
              onClick={() => setActiveSub(null)}
            >
              <ArrowBackIosNewIcon />
            </button>
          ) : (
            <span className="drawer-spacer" />
          )}

          <div className="drawer-title">
            {activeSub ? activeSub.label : t("header.menu") || "Menu"}
          </div>

          <button
            type="button"
            className="drawer-icon-btn"
            aria-label="Fermer"
            onClick={closeMobileMenu}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer content */}
        <div className="drawer-content">
          {!activeSub ? (
            <ul className="drawer-list">
              {menu.map((item) => {
                const hasChildren = !!item.children?.length;

                if (!hasChildren) {
                  return (
                    <li key={item.key} className="drawer-item">
                      <Link
                        to={item.to}
                        className="drawer-link"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.key} className="drawer-item">
                    <button
                      type="button"
                      className="drawer-link drawer-link-btn"
                      onClick={() => openSubMenu({ key: item.key, label: item.label, items: item.children })}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="drawer-list">
              {activeSub.items.map((it) => (
                <li key={it.to} className="drawer-item">
                  <Link to={it.to} className="drawer-link" onClick={closeMobileMenu}>
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </header>
  );
};

export default Header;