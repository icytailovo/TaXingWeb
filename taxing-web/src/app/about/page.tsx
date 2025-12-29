'use client';

import React from 'react';
import { Container } from '@mui/material';
import { volunteers } from '@/data/volunteers';
import { aboutPageContent } from '@/data/aboutContent';
import { AboutPageHeader, HistoryTimeline, VolunteerAccordion } from '@/components/about';

const AboutUs: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <AboutPageHeader title={aboutPageContent.pageTitle} />
      <HistoryTimeline sections={aboutPageContent.sections} />
      <VolunteerAccordion
        title={aboutPageContent.volunteerSectionTitle}
        volunteers={volunteers}
      />
    </Container>
  );
};

export default AboutUs;