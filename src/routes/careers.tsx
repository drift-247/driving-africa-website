import { createFileRoute } from '@tanstack/react-router'
import { CareersHero } from '#/components/careers/hero'
import { CareersCulture } from '#/components/careers/culture'
import { OpenRoles } from '#/components/careers/open-roles'
import { CareersCta } from '#/components/careers/cta'

export const Route = createFileRoute('/careers')({
  component: CareersPage,
})

function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <CareersHero />
      <CareersCulture />
      <OpenRoles />
      <CareersCta />
    </main>
  )
}
