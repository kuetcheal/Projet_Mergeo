import React, { useState, useMemo } from "react";
import ChatBot from "react-simple-chatbot";
import CloseIcon from "@mui/icons-material/Close";
import { Box, TextField, Typography, Button, Stack, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./chatbot.css";

// ------- Formulaire -------
const ContactForm = ({ triggerNextStep }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);

    // TODO: envoyer vers ton API ici
    triggerNextStep();
  };

  return (
    <Paper elevation={0} sx={{ p: 2, backgroundColor: "transparent" }}>
      <Typography variant="h6" gutterBottom>
        {t("chatbot.form.title")}
      </Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label={t("chatbot.form.name")}
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label={t("chatbot.form.phone")}
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label={t("chatbot.form.email")}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label={t("chatbot.form.message")}
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />

          <Box textAlign="right">
            <Button variant="contained" type="submit">
              {t("chatbot.form.send")}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

// ------- Composant principal -------
const Chat = ({ closeChat }) => {
  const { t } = useTranslation();

  const steps = useMemo(
    () => [
      {
        id: "1",
        message: t("chatbot.steps.hello"),
        trigger: "2",
      },
      {
        id: "2",
        options: [
          { value: "voyage", label: t("chatbot.steps.menu.travel"), trigger: "destination" },
          { value: "cours", label: t("chatbot.steps.menu.language"), trigger: "coursMenu" },
          { value: "job", label: t("chatbot.steps.menu.job"), trigger: "4" },
          { value: "service", label: t("chatbot.steps.menu.service"), trigger: "serviceMenu" },
          { value: "renseignement", label: t("chatbot.steps.menu.info"), trigger: "4" },
        ],
      },
      {
        id: "4",
        message: t("chatbot.steps.formIntro"),
        trigger: "contactForm",
      },

      // Destination
      {
        id: "destination",
        message: t("chatbot.steps.destination.ask"),
        trigger: "destinationOptions",
      },
      {
        id: "destinationOptions",
        options: [
          { value: "France", label: t("chatbot.steps.destination.france"), trigger: "reasonMenuFrance" },
          { value: "Canada", label: t("chatbot.steps.destination.canada"), trigger: "reasonMenuCanada" },
          { value: "Allemagne", label: t("chatbot.steps.destination.germany"), trigger: "reasonMenuAllemagne" },
          { value: "Belgique", label: t("chatbot.steps.destination.belgium"), trigger: "reasonMenuBelgique" },
        ],
      },

      // Raisons
      {
        id: "reasonMenuFrance",
        message: t("chatbot.steps.reason.france.ask"),
        trigger: "reasonOptionsFrance",
      },
      {
        id: "reasonOptionsFrance",
        options: [
          { value: "etudes", label: t("chatbot.steps.reason.study"), trigger: "contactForm" },
          { value: "tourisme", label: t("chatbot.steps.reason.tourism"), trigger: "contactForm" },
          { value: "affaires", label: t("chatbot.steps.reason.business"), trigger: "contactForm" },
          { value: "autres", label: t("chatbot.steps.reason.other"), trigger: "contactForm" },
        ],
      },

      {
        id: "reasonMenuCanada",
        message: t("chatbot.steps.reason.canada.ask"),
        trigger: "reasonOptionsCanada",
      },
      {
        id: "reasonOptionsCanada",
        options: [
          { value: "etudes", label: t("chatbot.steps.reason.study"), trigger: "contactForm" },
          { value: "tourisme", label: t("chatbot.steps.reason.tourism"), trigger: "contactForm" },
          { value: "immigration", label: t("chatbot.steps.reason.immigration"), trigger: "contactForm" },
          { value: "rp", label: t("chatbot.steps.reason.pr"), trigger: "contactForm" },
        ],
      },

      {
        id: "reasonMenuAllemagne",
        message: t("chatbot.steps.reason.germany.ask"),
        trigger: "reasonOptionsAllemagne",
      },
      {
        id: "reasonOptionsAllemagne",
        options: [
          { value: "etudes", label: t("chatbot.steps.reason.study"), trigger: "contactForm" },
          { value: "tourisme", label: t("chatbot.steps.reason.tourism"), trigger: "contactForm" },
          { value: "affaires", label: t("chatbot.steps.reason.business"), trigger: "contactForm" },
          { value: "autres", label: t("chatbot.steps.reason.other"), trigger: "contactForm" },
        ],
      },

      {
        id: "reasonMenuBelgique",
        message: t("chatbot.steps.reason.belgium.ask"),
        trigger: "reasonOptionsBelgique",
      },
      {
        id: "reasonOptionsBelgique",
        options: [
          { value: "etudes", label: t("chatbot.steps.reason.study"), trigger: "contactForm" },
          { value: "tourisme", label: t("chatbot.steps.reason.tourism"), trigger: "contactForm" },
          { value: "affaires", label: t("chatbot.steps.reason.business"), trigger: "contactForm" },
          { value: "autres", label: t("chatbot.steps.reason.other"), trigger: "contactForm" },
        ],
      },

      // Cours
      {
        id: "coursMenu",
        message: t("chatbot.steps.language.ask"),
        trigger: "coursOptions",
      },
      {
        id: "coursOptions",
        options: [
          { value: "anglais", label: t("chatbot.steps.language.english"), trigger: "contactForm" },
          { value: "allemand", label: t("chatbot.steps.language.german"), trigger: "contactForm" },
          { value: "espagnol", label: t("chatbot.steps.language.spanish"), trigger: "contactForm" },
        ],
      },

      // Services
      {
        id: "serviceMenu",
        message: t("chatbot.steps.service.ask"),
        trigger: "serviceOptions",
      },
      {
        id: "serviceOptions",
        options: [
          { value: "logement", label: t("chatbot.steps.service.housing"), trigger: "contactForm" },
          { value: "assurance", label: t("chatbot.steps.service.insurance"), trigger: "contactForm" },
          { value: "caution", label: t("chatbot.steps.service.bankGuarantee"), trigger: "contactForm" },
          { value: "bloque", label: t("chatbot.steps.service.blockedAccount"), trigger: "contactForm" },
        ],
      },

      // Form
      {
        id: "contactForm",
        component: <ContactForm />,
        waitAction: true,
        trigger: "confirmation",
      },
      {
        id: "confirmation",
        message: t("chatbot.steps.confirmation"),
        end: true,
      },
    ],
    [t]
  );

  return (
    <div className="chatbot-box">
      <ChatBot
        steps={steps}
        botAvatar="/images/receptionniste.jpg"
        userAvatar="/images/receptionniste.jpg"
        headerTitle={t("chatbot.headerTitle")}
        hideSubmitButton
      />

      {/* ton X par-dessus */}
      <CloseIcon className="chatbot-close-icon" onClick={closeChat} />
    </div>
  );
};

export default Chat;