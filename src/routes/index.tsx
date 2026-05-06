import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '#/components/landing/hero'
import { Features } from '#/components/landing/features'
import { FeaturedProduct } from '#/components/landing/featured-product'
import { Potential } from '#/components/landing/potential'
import { Cta } from '#/components/landing/cta'

export const Route = createFileRoute('/')({ component: Home })

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
