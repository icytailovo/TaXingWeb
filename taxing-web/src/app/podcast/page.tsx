import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';
import PodcastPlayer from '@/components/PodcastPlayer';


export default function PodcastListPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <PodcastPlayer />
    </Container>
  );
}