import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  const elementId = searchParams.get('elementId');

  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    );
  }

  try {
    console.log('Fetching article from:', url);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    console.log('HTML received, length:', html.length);

    // If elementId is provided, try to parse and extract that element
    if (elementId) {
      // Use regex or cheerio to extract the element
      // For now, return the full HTML and let client parse it
      return NextResponse.json({
        success: true,
        html,
        elementId,
        message: 'HTML fetched successfully. Parse on client side.',
      });
    }

    return NextResponse.json({
      success: true,
      html,
    });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch article',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
