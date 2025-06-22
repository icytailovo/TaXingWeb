'use client';

import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { PodcastFeed, PodcastEpisode } from '@/types/podcast';
import { Box, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemButton, ListItemText, Divider, Skeleton } from '@mui/material';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

export default function PodcastPlayer() {
  const [podcastData, setPodcastData] = useState<PodcastFeed | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPodcastData = async () => {
      try {
        const response = await fetch('/api/podcast');
        if (!response.ok) {
          throw new Error('Failed to fetch podcast data');
        }
        const data = await response.json();
        setPodcastData(data);
        // Set the first episode as the current episode by default
        if (data.episodes && data.episodes.length > 0) {
          setCurrentEpisode(data.episodes[0]);
        }
      } catch (err) {
        setError('Error loading podcast. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcastData();
  }, []);

  const handleEpisodeSelect = (episode: PodcastEpisode) => {
    setCurrentEpisode(episode);
    // Scroll to the player when an episode is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
        <Skeleton variant="rectangular" height={300} />
        <Skeleton variant="text" height={60} sx={{ mt: 2 }} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="rectangular" height={80} sx={{ mt: 2 }} />
        <Skeleton variant="text" height={30} sx={{ mt: 2 }} />
        <Skeleton variant="text" height={30} />
        <Skeleton variant="text" height={30} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!podcastData || !currentEpisode) {
    return (
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
        <Typography variant="h5">
          No podcast episodes found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
      {/* Podcast Header */}
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="250"
          image={podcastData.image}
          alt={podcastData.title}
          sx={{ objectFit: 'contain', bgcolor: '#f0f0f0' }}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {podcastData.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {podcastData.description}
          </Typography>
        </CardContent>
      </Card>

      {/* Current Episode */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {currentEpisode.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {formatDate(currentEpisode.publishDate)}
            {currentEpisode.duration && ` · ${currentEpisode.duration}`}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 2 }} component="div">
            {parse(DOMPurify.sanitize(currentEpisode.description))}
          </Typography>
        </CardContent>

        {/* Audio Player */}
        <AudioPlayer
          src={currentEpisode.audioUrl}
          showJumpControls={true}
          layout="stacked"
          customProgressBarSection={['CURRENT_TIME', 'PROGRESS_BAR', 'DURATION']}
          customControlsSection={['ADDITIONAL_CONTROLS', 'MAIN_CONTROLS', 'VOLUME_CONTROLS']}
          autoPlayAfterSrcChange={false}
        />
      </Card>

      {/* Episode List */}
      <Typography variant="h5" component="h2" gutterBottom>
        All Episodes
      </Typography>
      <List sx={{ bgcolor: 'background.paper' }}>
        {podcastData.episodes.map((episode, index) => (
          <React.Fragment key={episode.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleEpisodeSelect(episode)}
                selected={currentEpisode.id === episode.id}
              >
                <ListItemText
                  primary={episode.title}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {formatDate(episode.publishDate)}
                      </Typography>
                      {episode.duration && ` · ${episode.duration}`}
                    </>
                  }
                />
              </ListItemButton>
            </ListItem>
            {index < podcastData.episodes.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}