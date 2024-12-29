import React from 'react';
import { Typography } from '@mui/material';
import './Footer.css';
import { FaWhatsappSquare } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <div className="Footer">
        <Typography variant="body1" color="textSecondary" margin={0}>
          שולמית בר כהנים - ייעוץ וטיפול זוגי.
        </Typography>
        <Typography
        variant="body1" color="textSecondary" margin={0}
        >0546204619</Typography>
        <a
          href="https://wa.me/972546204619" target="_blank"
        >
          <FaWhatsappSquare color='green' height={25}  width={25}/>
        </a>
        <Typography variant="body2" color="textSecondary" margin={0}>
          כל הזכויות שמורות © 2024
        </Typography>
    </div>
  );
};

export default Footer;
