import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Volunteer } from '@/types/volunteer';

interface VolunteerAccordionProps {
  title: string;
  volunteers: Volunteer[];
}

const VolunteerAccordion: React.FC<VolunteerAccordionProps> = ({ title, volunteers }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="team-content"
        id="team-header"
        sx={{ bgcolor: '#f8f9fa' }}
      >
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#000' }}>
          {title} ({volunteers.length})
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: '#f8f9fa', pt: 0 }}>
        <Box>
          {volunteers.map((volunteer, index) => (
            <Box
              key={volunteer.name}
              sx={{
                py: 2,
                borderBottom: index < volunteers.length - 1 ? '1px solid #e0e0e0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                {volunteer.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {volunteer.participation}
              </Typography>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default VolunteerAccordion;
