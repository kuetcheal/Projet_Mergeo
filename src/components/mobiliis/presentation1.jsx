import React, { useMemo } from "react";
import { Box,  Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

const Presentation1 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePresentationClick = () => navigate("/presentation");

  const items = useMemo(() => {
    const val = t("presentation1.list", { returnObjects: true });
    return Array.isArray(val) ? val : [];
  }, [t]);

  return (
  
    <Box sx={{ width: "100%", bgcolor: "#f9f9f9", py: { xs: 4, md: 5 } }}>
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
          <Container>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/canada-ville.avif"
              alt={t("presentation1.imageAlt")}
              sx={{
                borderRadius: "8px",
                width: "100%",
                height: { xs: 260, sm: 360, md: 600 },
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#D6007F" }}
            >
              {t("presentation1.title")}
            </Typography>

            <Typography variant="body1" paragraph>
              {t("presentation1.p1")}
            </Typography>

            <Typography variant="body1" paragraph>
              {t("presentation1.p2BeforeBold")}
              <strong>{t("presentation1.p2Bold")}</strong>
            </Typography>

            <List sx={{ pl: 0 }}>
              {items.map((text, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SendIcon sx={{ color: "#D6007F" }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            <Button
              onClick={handlePresentationClick}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#0047AB",
                color: "#fff",
                fontWeight: "bold",
                mt: 2,
                "&:hover": { backgroundColor: "#A93D87" },
              }}
            >
              {t("presentation1.cta")}
            </Button>
          </Grid>
        </Grid>
        </Container>
      </Box>
    </Box>
   
  );
};

export default Presentation1;