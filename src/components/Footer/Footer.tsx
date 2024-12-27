import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';
const Footer: React.FC = () => {
  return (
    <div className="Footer">
    <Box 
      component="footer" >
        <Typography variant="body1" color="textSecondary">
          שולמית בר כהנים - ייעוץ וטיפול זוגי.  
        </Typography>
        
        <Typography variant="body1" color="textSecondary">
        📞 טלפון: 0504136536
        </Typography>

        <Typography variant="body2" color="textSecondary">
          כל הזכויות שמורות © 2024
        </Typography>
    </Box>
      </div>
  );
};

export default Footer;
