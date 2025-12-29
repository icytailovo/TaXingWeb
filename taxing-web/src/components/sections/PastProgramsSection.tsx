import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import TextDivider from '@/components/common/TextDivider';
import { PastProgramCardData } from '@/types/home';

const pastProgramCards: PastProgramCardData[] = [
  { imageSrc: '/images/taxing-hero-image.png', title: 'past program 1', text: 'past program 1 text' },
  { imageSrc: '/images/taxing-hero-image.png', title: 'past program 2', text: 'past program 2 text' },
  { imageSrc: '/images/taxing-hero-image.png', title: 'past program 3', text: 'past program 3 text' },
];

const PastProgramsSection = () => (
  <>
    <TextDivider text="往期回顾" />
    <Typography
      variant="h4"
      component="h4"
      gutterBottom
      sx={{ padding: 4, px: 6 }}
    >
      「她行」的Mentorship活动在聚焦于理工科女性的职业成长的同时, 也搭建了一个个温暖的女性社群
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 3 }}>
      {pastProgramCards.map((card) => (
        <Card
          key={card.title}
          sx={{
            height: 300,
            width: 300,
            backgroundImage: `url(${card.imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            borderRadius: 3,
            color: 'white',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: 'inherit',
            },
          }}
        >
          <CardContent sx={{ position: 'relative', color: 'white', p: 3, pt: 4 }}>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2">{card.text}</Typography>
          </CardContent>
          <CardActions sx={{ p: 4, mt: 4 }}>
            <Button size="small" variant="contained" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  </>
);

export default PastProgramsSection;
