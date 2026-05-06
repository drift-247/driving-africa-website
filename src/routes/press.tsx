import { createFileRoute } from '@tanstack/react-router'
import { PressHero } from '#/components/press/hero'
import { NewsSection } from '#/components/press/news-section'
import { MediaKit } from '#/components/press/media-kit'
import { MediaContact } from '#/components/press/media-contact'

export const Route = createFileRoute('/press')({
  component: PressPage,
})

function PressPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent/30">
      <PressHero />
      <NewsSection />
      <MediaKit />
      <MediaContact />
    </main>
  )
}
