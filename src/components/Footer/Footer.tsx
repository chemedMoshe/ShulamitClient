import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';
const Footer: React.FC = () => {
  return (
    <div className="Footer">
    <Box 
      component="footer" >
       <Typography variant="body2">
          שולמית בר כהנים ייעוץ וטיפול זוגי
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()}
        </Typography>
    </Box>
      </div>
  );
};

export default Footer;
