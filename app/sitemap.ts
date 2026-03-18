import type { MetadataRoute } from 'next';
import routes from '../src/app/data/routes.json';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const routePages = routes.map((route: { id: string }) => ({
    url: `${siteUrl}/route/${route.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...routePages,
  ];
}
