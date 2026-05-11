export const seoConfig = {
  meta: [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'Driving Africa Digital Limited',
    },
    {
      name: 'color-scheme',
      content: 'light dark',
    },
    {
      name: 'description',
      content:
        'Driving Africa Digital Limited builds digital products for Africa with a focus on safety, trust, and practical local impact.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'author',
      content: 'Driving Africa Digital Limited',
    },
    {
      name: 'keywords',
      content:
        'Driving Africa Digital Limited, digital products, Africa, mobility, logistics, safety-first technology',
    },
    {
      property: 'og:title',
      content: 'Driving Africa Digital Limited',
    },
    {
      property: 'og:description',
      content:
        'Driving Africa Digital Limited - building practical digital products for Africa',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:site_name',
      content: 'Driving Africa Digital',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],

  faviconLinks: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
    {
      rel: 'shortcut icon',
      href: '/logo-icon.svg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}

export interface PageMetaOptions {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  keywords?: string
  canonical?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterSite?: string
  twitterCreator?: string
  robots?: string
}

function makeDescription(title: string) {
  if (title === 'Driving Africa Digital Limited') {
    return 'Driving Africa Digital Limited builds digital products for Africa with a focus on safety, trust, and practical local impact.'
  }

  return `${title} - Driving Africa Digital Limited`
}

export function createPageMeta(options: PageMetaOptions = {}) {
  const {
    title = 'Driving Africa Digital Limited',
    description = makeDescription('Driving Africa Digital Limited'),
    ogTitle = title,
    ogDescription = description,
    ogImage,
    ogUrl,
    keywords,
    canonical,
    twitterCard = 'summary_large_image',
    twitterSite,
    twitterCreator,
    robots,
  } = options

  return {
    meta: [
      { title },
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: description },
      { name: 'color-scheme', content: 'light dark' },
      ...(keywords
        ? [
            {
              name: 'keywords',
              content: keywords,
            },
          ]
        : []),
      ...(robots
        ? [
            {
              name: 'robots',
              content: robots,
            },
          ]
        : []),
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Driving Africa Digital' },
      ...(ogImage
        ? [
            {
              property: 'og:image',
              content: ogImage,
            },
          ]
        : []),
      ...(ogUrl
        ? [
            {
              property: 'og:url',
              content: ogUrl,
            },
          ]
        : []),
      { name: 'twitter:card', content: twitterCard },
      ...(twitterSite
        ? [
            {
              name: 'twitter:site',
              content: twitterSite,
            },
          ]
        : []),
      ...(twitterCreator
        ? [
            {
              name: 'twitter:creator',
              content: twitterCreator,
            },
          ]
        : []),
    ],
    links: [
      ...seoConfig.faviconLinks,
      ...(canonical
        ? [
            {
              rel: 'canonical',
              href: canonical,
            },
          ]
        : []),
    ],
  }
}

export function createPresetPageMeta(overrides: PageMetaOptions = {}) {
  return createPageMeta({
    title: overrides.title,
    description: overrides.description,
    ogTitle: overrides.ogTitle,
    ogDescription: overrides.ogDescription,
    ogImage: overrides.ogImage,
    ogUrl: overrides.ogUrl,
    keywords: overrides.keywords,
    canonical: overrides.canonical,
    twitterCard: overrides.twitterCard,
    twitterSite: overrides.twitterSite,
    twitterCreator: overrides.twitterCreator,
    robots: overrides.robots,
  })
}
