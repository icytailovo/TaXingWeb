import fs from 'fs';
import path from 'path';
import Parser from 'rss-parser';

const FEED_URL = process.env.PODCAST_FEED_URL || 'https://feed.xyzfm.space/qwkvwqr67mfc';
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'podcast.json');

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

async function main() {
  console.log(`Fetching podcast feed from ${FEED_URL} ...`);
  const feed = await parser.parseURL(FEED_URL);

  const podcastFeed = {
    title: feed.title || '',
    description: feed.description || '',
    link: feed.link || '',
    image: feed.itunes?.image || feed.image?.url || '',
    author: feed.itunes?.author || '',
    categories: feed.itunes?.categories || [],
    episodes: (feed.items || []).map((item, index) => ({
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

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(podcastFeed, null, 2), 'utf-8');
  console.log(`Saved ${podcastFeed.episodes.length} episodes to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('Failed to fetch podcast feed:', err);
  process.exit(1);
});
