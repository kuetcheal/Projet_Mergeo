import React from "react";
import "./presentation.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className="entre">
      {/* HERO */}
      <div className="anglais-section">
        <img
          src="/images/quebec.jpg"
          alt={t("presentation.images.heroAlt")}
          className="anglais-image"
        />
        <div className="overlay"></div>

        <div className="breadcrumb-content">
          <p className="breadcrumb-title">{t("presentation.heroTitle")}</p>
          <div className="underline"></div>
        </div>
      </div>

      <Container className="presentation-container">
        {/* SECTION 1 */}
        <h1 className="presentation-title">{t("presentation.section1Title")}</h1>

        <div className="presentation-content">
          <div className="quote-icon">
            <span>&#x275D;</span>
          </div>

          <div className="story-card">
            <div className="story-image">
              <img
                src="/images/photo_Alex.jpeg"
                alt={t("presentation.images.founderAlt")}
              />
            </div>

            <div className="story-text">
              <h2>{t("presentation.founderName")}</h2>
              <p className="story-role">{t("presentation.founderRole")}</p>

              <p>
                <strong>{t("presentation.anecdoteLabel")}</strong>{" "}
                {t("presentation.anecdoteText")}
                <br />
                <strong>{t("presentation.desireLabel")}</strong>{" "}
                {t("presentation.desireText")}
                <br />
                <strong>{t("presentation.destinationLabel")}</strong>{" "}
                {t("presentation.destinationText")}
              </p>

              <p>{t("presentation.storyP1")}</p>
              <p>{t("presentation.storyP2")}</p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <h1 className="presentation-subtitle">{t("presentation.section2Title")}</h1>

        <Row className="presentation-story g-4 align-items-center">
          <Col xs={12} lg={6}>
            <div className="renew-text">
              <p>{t("presentation.renewText")}</p>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="story-video">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/LTAhX568Esk"
                title={t("presentation.videoTitle")}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* CULTURE */}
        <section className="culture-section">
          <h1 className="culture-title">{t("presentation.cultureTitle")}</h1>
          <p className="culture-text">{t("presentation.cultureText")}</p>
        </section>

        {/* 3 CARDS */}
        <Row className="values-row g-3">
          <Col xs={12} md={4}>
            <div className="value-card">
              <h2>{t("presentation.cards.engagementTitle")}</h2>
              <p>{t("presentation.cards.engagementP1")}</p>
              <p>{t("presentation.cards.engagementP2")}</p>
              <p>{t("presentation.cards.engagementP3")}</p>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="value-card">
              <h2>{t("presentation.cards.missionTitle")}</h2>
              <p>{t("presentation.cards.missionP1")}</p>
              <p>{t("presentation.cards.missionP2")}</p>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="value-card">
              <h2>{t("presentation.cards.visionTitle")}</h2>
              <p>{t("presentation.cards.visionP1")}</p>
              <p>{t("presentation.cards.visionP2")}</p>
            </div>
          </Col>
        </Row>

        {/* STATS */}
        <div className="statistics-section">
          <h2>{t("presentation.statsTitle")}</h2>

          <Row className="statistics-container g-3">
            <Col xs={6} md={3}>
              <div className="stat-item">
                <PeopleAltIcon className="stat-icon" />
                <h3>{t("presentation.stats.peopleValue")}</h3>
                <h4>{t("presentation.stats.peopleLabel")}</h4>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="stat-item">
                <SchoolIcon className="stat-icon" />
                <h3>{t("presentation.stats.successValue")}</h3>
                <h4>{t("presentation.stats.successLabel")}</h4>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="stat-item">
                <PublicIcon className="stat-icon" />
                <h3>{t("presentation.stats.countriesValue")}</h3>
                <h4>{t("presentation.stats.countriesLabel")}</h4>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="stat-item">
                <GroupsIcon className="stat-icon" />
                <h3>{t("presentation.stats.teamValue")}</h3>
                <h4>{t("presentation.stats.teamLabel")}</h4>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Presentation;