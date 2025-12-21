import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

export default function AccordionList({
  items = [],
  headerBg = "#0056b3",
  headerColor = "#fff",
  detailsBg = "#f0eef4",
  detailsColor = "#2b2b2b",
  defaultExpanded = null, 
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleChange = (index) => (_, isExpanded) => {
    setExpanded(isExpanded ? index : null);
  };

  return (
    <>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            boxShadow: "none",
            border: "none",
            mb: 1,
            "&::before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <DashCircle color={headerColor} size={20} />
              ) : (
                <PlusCircle color={headerColor} size={20} />
              )
            }
            sx={{
              bgcolor: headerBg,
              color: headerColor,
              padding: "12px 16px",
              fontWeight: "bold",
              "& .MuiAccordionSummary-content": {
                margin: 0,
                alignItems: "center",
              },
            }}
          >
            <Typography fontWeight={600}>{item.title}</Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              bgcolor: detailsBg,
              color: detailsColor,
              padding: 2,
              fontSize: "0.95rem",
            }}
          >
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
