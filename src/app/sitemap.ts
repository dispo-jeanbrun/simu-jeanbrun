import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://simu-jeanbrun.fr';

  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/simulateur', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/dispositif-jeanbrun', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/jeanbrun-vs-lmnp', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/jeanbrun-vs-pinel', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/jeanbrun-ancien-renove', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/jeanbrun-neuf', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/plafond-loyer-jeanbrun', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/deficit-foncier-jeanbrun', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/amortissement-jeanbrun', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/jeanbrun-sci', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/conditions-jeanbrun', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/fiscalite-jeanbrun', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
