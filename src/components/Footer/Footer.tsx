import React from 'react';
import { Typography } from '@mui/material';
import './Footer.css';
import { FaWhatsappSquare } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <div className="Footer">
        <Typography variant="body1" color="textSecondary" margin={0}>
          שולמית בר כוהנים - ייעוץ וטיפול זוגי.
        </Typography>
        <Typography
        variant="body1" color="textSecondary" margin={0}
        >0546204619</Typography>
        <a
        className='WhatsappIcone'
          href="https://katzr.net/3021db" target="_blank"
        >
          <FaWhatsappSquare color='#25D366'/>
        </a>
        <Typography variant="body2" color="textSecondary" margin={0}>
          כל הזכויות שמורות © 2024
        </Typography>
    </div>
  );
};

export default Footer;
