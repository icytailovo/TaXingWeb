import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { PodcastFeed } from '@/types/podcast';

// ISR: Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

// Create a custom parser to handle podcast-specific fields
const parser = new Parser({
  customFields: {
    item: [
      'itunes:duration',
      'itunes:image',
      'itunes:explicit',
      'itunes:subtitle',
      'itunes:summary',
      'itunes:season',
      'itunes:episode',
    ],
  },
});

export async function GET() {
  try {
    const feedUrl = 'https://feed.xyzfm.space/qwkvwqr67mfc';

    const feed = await parser.parseURL(feedUrl);

    // Transform the feed data into our PodcastFeed format
    const podcastFeed: PodcastFeed = {
      title: feed.title || '',
      description: feed.description || '',
      link: feed.link || '',
      image: feed.itunes?.image || feed.image?.url || '',
      author: feed.itunes?.author || '',
      categories: feed.itunes?.categories || [],
      episodes: feed.items.map((item, index) => ({
        id: item.guid || `episode-${index}`,
        title: item.title || `Episode ${index}`,
        description: item.content || item['itunes:summary'] || item.description || '',
        audioUrl: item.enclosure?.url || '',
        publishDate: item.pubDate || '',
        duration: item['itunes:duration'] || undefined,
        image: item['itunes:image']?.href || feed.image?.url || '',
        episodeNumber: item['itunes:episode'] ? parseInt(item['itunes:episode'], 10) : undefined,
        season: item['itunes:season'] ? parseInt(item['itunes:season'], 10) : undefined,
        explicit: item['itunes:explicit'] === 'yes',
      })),
    };

    return NextResponse.json(podcastFeed, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching podcast:', error);
    return NextResponse.json(
      { error: 'Failed to fetch podcast feed' },
      { status: 500 }
    );
  }
}