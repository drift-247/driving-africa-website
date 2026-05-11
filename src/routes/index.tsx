import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '#/components/landing/hero'
import { Features } from '#/components/landing/features'
import { FeaturedProduct } from '#/components/landing/featured-product'
import { Potential } from '#/components/landing/potential'
import { Cta } from '#/components/landing/cta'
import { createPresetPageMeta } from '../seo'

export const Route = createFileRoute('/')({
  component: Home,
  head: () =>
    createPresetPageMeta({
      title: 'Driving Africa Digital Limited',
      description:
        'Driving Africa Digital Limited builds digital products for Africa with a focus on safety, trust, and practical local impact.',
      ogTitle: 'Driving Africa Digital Limited',
      ogDescription:
        'Driving Africa Digital Limited - building practical digital products for Africa',
      ogUrl: 'https://drift-africa.example',
      canonical: 'https://drift-africa.example',
      keywords:
        'Driving Africa Digital Limited, digital products, Africa, mobility, logistics, safety-first technology',
    }),
})

function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent/30">
      <Hero />
      <Features />
      <FeaturedProduct />
      <Potential />
      <Cta />
    </main>
  )
}
