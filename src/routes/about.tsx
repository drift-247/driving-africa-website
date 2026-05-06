import { createFileRoute } from '@tanstack/react-router'
import { AboutHero } from '#/components/about/hero'
import { MissionVision } from '#/components/about/mission-vision'
import { Values } from '#/components/about/values'
import { Founders } from '#/components/about/founders'
import { Team } from '#/components/about/team'
import { AboutCta } from '#/components/about/cta'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <MissionVision />
      <Values />
      <Founders />
      <Team />
      <AboutCta />
    </main>
  )
}
