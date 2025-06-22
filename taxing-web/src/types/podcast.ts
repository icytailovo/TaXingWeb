export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  publishDate: string;
  duration?: string;
  image?: string;
}

export interface PodcastFeed {
  title: string;
  description: string;
  link: string;
  image: string;
  episodes: PodcastEpisode[];
}