import React, { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import "./callButton.css";

const CallButton = () => {
  const phoneNumber = "+237 655196254";
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <a className="call-floating-button" href={`tel:${phoneNumber}`}>
      <CallIcon className="call-floating-icon" />
      <span className="call-floating-label">{phoneNumber}</span>
    </a>
  );
};

export default CallButton;
