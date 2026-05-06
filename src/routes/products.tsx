import { createFileRoute } from '@tanstack/react-router'
import { ProductsHero } from '#/components/our-products/hero'
import { Drift247Feature } from '#/components/our-products/drift247-feature'
import { ProductPhilosophy } from '#/components/our-products/philosophy'
import { NextGenLogistics } from '#/components/our-products/next-gen'
import { ProductNewsletter } from '#/components/our-products/newsletter'

export const Route = createFileRoute('/products')({
  component: ProductsPage,
})

function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProductsHero />
      <Drift247Feature />
      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        <ProductPhilosophy />
        <NextGenLogistics />
      </section>
      <ProductNewsletter />
    </main>
  )
}
