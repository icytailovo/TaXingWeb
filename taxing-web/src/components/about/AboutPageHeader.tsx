import React from 'react';
import { Typography } from '@mui/material';

interface AboutPageHeaderProps {
  title: string;
}

const AboutPageHeader: React.FC<AboutPageHeaderProps> = ({ title }) => {
  return (
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        mb: 6,
        textAlign: 'center'
      }}
    >
      {title}
    </Typography>
  );
};

export default AboutPageHeader;
