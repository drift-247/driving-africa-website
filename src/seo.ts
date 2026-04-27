/**
 * Minimal SEO + LLM Optimization (LLMO) helpers
 *
 * Goals:
 * - Very small, dependency-free helpers to produce `head` objects (title/meta/links/scripts)
 * - Simple JSON-LD builders for WebSite / Organization / Article / Product / FAQ
 * - Include an LLMO documentation payload and a machine-friendly `llms.txt` generator
 *
 * Notes:
 * - Import only the specific helpers you need to keep bundles tiny.
 * - This file intentionally avoids React/DOM APIs so it can be used on server or build-time code.
 */

/* -------------------- Types -------------------- */

export type MetaTag = {
  name?: string
  property?: string
  content?: string
  charSet?: 'utf-8'
}

export type LinkTag = {
  rel: string
  href: string
  type?: string
  sizes?: string
}

export type ScriptTag = {
  type: string
  innerHTML: string
}

export type HeadObject = {
  title?: string
  meta?: MetaTag[]
  links?: LinkTag[]
  scripts?: ScriptTag[]
}

export type SEOOptions = {
  title?: string
  description?: string
  url?: string
  image?: string
  canonical?: string
  locale?: string
  siteName?: string
  twitterHandle?: string
  themeColor?: string
  icon?: string
  extraMeta?: MetaTag[]
  extraLinks?: LinkTag[]
}

/* -------------------- Small helpers -------------------- */

function s(v?: string) {
  if (!v) return ''
  return v.replace(/\s+/g, ' ').trim()
}

function jsonCompact(obj: any) {
  return JSON.stringify(obj, (_k, v) => {
    if (v === undefined) return undefined
    if (typeof v === 'string' && v.trim() === '') return undefined
    if (Array.isArray(v) && v.length === 0) return undefined
    return v
  })
}

/* -------------------- Head builders -------------------- */

export function buildLinks(opts: SEOOptions): LinkTag[] {
  const out: LinkTag[] = []
  const canonical = s(opts.canonical || opts.url)
  if (canonical) out.push({ rel: 'canonical', href: canonical })
  if (opts.icon) out.push({ rel: 'icon', href: s(opts.icon) })
  if (opts.extraLinks) out.push(...opts.extraLinks)
  return out
}

export function buildMeta(opts: SEOOptions): MetaTag[] {
  const title = s(opts.title)
  const description = s(opts.description)
  const url = s(opts.url)
  const image = s(opts.image)
  const siteName = s(opts.siteName)
  const locale = s(opts.locale)
  const themeColor = s(opts.themeColor)
  const twitter = s(opts.twitterHandle)

  const meta: MetaTag[] = []

  if (title) meta.push({ name: 'title', content: title })
  if (description) meta.push({ name: 'description', content: description })
  if (themeColor) meta.push({ name: 'theme-color', content: themeColor })

  // charset entry (some head managers accept it)
  meta.push({ charSet: 'utf-8' })

  // Open Graph
  if (title) meta.push({ property: 'og:title', content: title })
  if (description)
    meta.push({ property: 'og:description', content: description })
  if (url) meta.push({ property: 'og:url', content: url })
  if (image) meta.push({ property: 'og:image', content: image })
  if (siteName) meta.push({ property: 'og:site_name', content: siteName })
  if (locale) meta.push({ property: 'og:locale', content: locale })

  // Twitter
  meta.push({
    name: 'twitter:card',
    content: image ? 'summary_large_image' : 'summary',
  })
  if (twitter) meta.push({ name: 'twitter:site', content: twitter })
  if (title) meta.push({ name: 'twitter:title', content: title })
  if (description)
    meta.push({ name: 'twitter:description', content: description })
  if (image) meta.push({ name: 'twitter:image', content: image })

  if (opts.extraMeta) meta.push(...opts.extraMeta)

  return meta.filter((m) => {
    if ('charSet' in m && m.charSet) return true
    return typeof m.content === 'string' && m.content.length > 0
  })
}

export function headForSEO(opts: SEOOptions): HeadObject {
  const head: HeadObject = {}
  const title = s(opts.title)
  if (title) head.title = title
  const meta = buildMeta(opts)
  if (meta.length) head.meta = meta
  const links = buildLinks(opts)
  if (links.length) head.links = links
  return head
}

export function headWithStructuredData(
  opts: SEOOptions,
  structuredData?: any,
): HeadObject {
  const head = headForSEO(opts)
  if (structuredData) {
    const payload = jsonCompact(structuredData)
    if (payload && payload !== '{}') {
      head.scripts = head.scripts || []
      head.scripts.push({ type: 'application/ld+json', innerHTML: payload })
    }
  }
  return head
}

/* -------------------- JSON-LD builders (very small / opinionated) -------------------- */

export function buildWebsiteSchema(opts: {
  name: string
  url?: string
  description?: string
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: opts.name,
  }
  if (opts.url) schema.url = opts.url
  if (opts.description) schema.description = opts.description
  return schema
}

export function buildOrganizationSchema(opts: {
  name: string
  url?: string
  logo?: string
  sameAs?: string[]
  description?: string
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: opts.name,
  }
  if (opts.url) schema.url = opts.url
  if (opts.logo) schema.logo = opts.logo
  if (opts.sameAs && opts.sameAs.length) schema.sameAs = opts.sameAs
  if (opts.description) schema.description = opts.description
  return schema
}

export function buildArticleSchema(opts: {
  headline: string
  description?: string
  image?: string | string[]
  authorName?: string
  datePublished?: string
  dateModified?: string
  publisherName?: string
  publisherLogo?: string
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
  }
  if (opts.description) schema.description = opts.description
  if (opts.image) schema.image = opts.image
  if (opts.authorName)
    schema.author = { '@type': 'Person', name: opts.authorName }
  if (opts.datePublished) schema.datePublished = opts.datePublished
  if (opts.dateModified) schema.dateModified = opts.dateModified
  if (opts.publisherName) {
    schema.publisher = { '@type': 'Organization', name: opts.publisherName }
    if (opts.publisherLogo)
      schema.publisher.logo = {
        '@type': 'ImageObject',
        url: opts.publisherLogo,
      }
  }
  return schema
}

export function buildProductSchema(opts: {
  name: string
  description?: string
  images?: string[]
  brand?: string
  price?: string | number
  priceCurrency?: string
  availability?: string
  ratingValue?: number
  reviewCount?: number
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
  }
  if (opts.description) schema.description = opts.description
  if (opts.images) schema.image = opts.images
  if (opts.brand) schema.brand = { '@type': 'Brand', name: opts.brand }
  if (opts.price) {
    schema.offers = {
      '@type': 'Offer',
      price: opts.price,
      priceCurrency: opts.priceCurrency || 'USD',
    }
    if (opts.availability) schema.offers.availability = opts.availability
  }
  if (opts.ratingValue) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: opts.ratingValue,
      reviewCount: opts.reviewCount || 0,
    }
  }
  return schema
}

export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}

/* -------------------- LLMO documentation & helpers -------------------- */

/**
 * LLMO documentation payload (machine-friendly & human-readable).
 * Keep this string small, structured, and explicit so LLMs can extract facts easily.
 *
 * The content below mirrors best practices for LLM Optimization:
 * - Clear definition
 * - Differences vs SEO (table-like bullet facts)
 * - Practical techniques (structured data, llms.txt, machine-readable endpoints)
 *
 * Consumers: include this in your documentation page / machine-readable endpoint (llms.txt)
 * or surface parts of it in HTML as <pre> or <script type="application/ld+json"> depending on use.
 */
export const LLMO_DOC = `
id: llmo
title: LLM Optimization (LLMO)

NOTE: For traditional search engine optimization see your SEO guide.

What is LLMO?
LLM Optimization (LLMO) is the practice of structuring content and data so AI systems
(e.g. ChatGPT, Claude, Perplexity) can accurately understand, cite, and recommend it.
LLMO focuses on being correctly represented in AI-generated responses rather than search ranking.

How LLMO differs from SEO:
- Goal: LLMO -> be cited by LLMs. SEO -> rank in search results.
- Audience: LLM training & retrieval systems vs search engine crawlers.
- Key signals: Structured data, clarity, authoritative metadata vs links/keywords/speed.
- Overlap: Clear structure, authoritative content, and metadata help both.

Core LLMO techniques:
- Expose structured data (JSON-LD) for WebSite, Organization, Article, Product, FAQ.
- Provide machine-readable endpoints (llms.txt, APIs returning schema.org JSON).
- Use clear hierarchical headings and explicit facts (author, dates, product specs).
- Include authoritative attribution (author profiles, publisher data, verified links).
- Monitor AI citations by sampling assistant outputs and validating structured data.

llms.txt recommendation:
- Provide short summary, key docs links, canonical API endpoints, and contact.
- Keep it plain text and easy to crawl.

Examples: Use JSON-LD Article/Product/FAQ in route heads. Provide an /llms.txt endpoint
that returns key facts and documentation links.

.`

/**
 * Create a compact llms.txt content optimized for LLM consumption.
 * You can return this from a plain text endpoint at "/llms.txt".
 */
export function buildLlmsTxt(opts: {
  title?: string
  summary?: string
  docs?: string[]
  apis?: string[]
  contact?: string
  facts?: string[]
}) {
  const lines: string[] = []
  if (opts.title) lines.push(`# ${s(opts.title)}`)
  if (opts.summary) lines.push('', s(opts.summary))
  if (opts.docs && opts.docs.length) {
    lines.push('', '## Documentation')
    for (const d of opts.docs) lines.push(`- ${d}`)
  }
  if (opts.apis && opts.apis.length) {
    lines.push('', '## Machine-Readable Endpoints')
    for (const a of opts.apis) lines.push(`- ${a}`)
  }
  if (opts.facts && opts.facts.length) {
    lines.push('', '## Key Facts')
    for (const f of opts.facts) lines.push(`- ${f}`)
  }
  if (opts.contact) {
    lines.push('', '## Contact', `- ${s(opts.contact)}`)
  }
  // Always include brief LLMO summary for quick extraction by LLMs
  lines.push(
    '',
    '## LLMO (short)',
    'LLM Optimization: structure content and expose schema.org JSON for AI systems.',
  )
  return lines.join('\n')
}

/* -------------------- Small convenience defaults -------------------- */

export function defaultSEO(): SEOOptions {
  return {
    title: '',
    description: '',
    siteName: '',
    locale: 'en-US',
    twitterHandle: '',
    themeColor: '#ffffff',
  }
}

/* -------------------- Exports summary (for IDE discoverability) -------------------- */
/*
Exports:
- buildMeta, buildLinks, headForSEO, headWithStructuredData
- buildWebsiteSchema, buildOrganizationSchema, buildArticleSchema, buildProductSchema, buildFAQSchema
- jsonCompact, jsonLdString (alias), LLMO_DOC, buildLlmsTxt, defaultSEO
*/

// Small alias kept small for compatibility
export const jsonLdString = jsonCompact
