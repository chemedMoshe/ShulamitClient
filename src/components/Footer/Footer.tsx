import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';
const Footer: React.FC = () => {
  return (
    <div className="Footer">
    <Box 
      component="footer" >
        <Typography variant="body2" color="textSecondary">
          שולמית בר כהנים - ייעוץ וטיפול זוגי.  
        </Typography>
        <Typography variant="body2" color="textSecondary">
          כל הזכויות שמורות © 2024
        </Typography>
        <Typography variant="body2" color="textSecondary">
          📞 טלפון: 050-1234567 | 📧 דוא"ל: example@example.com
        </Typography>
    </Box>
      </div>
  );
};

export default Footer;
