import { createFileRoute } from '@tanstack/react-router'
import { 
  LegalLayout, 
  LegalSection, 
  LegalInfoBox, 
  LegalChecklist 
} from '#/components/legal/legal-layout'

export const Route = createFileRoute('/cookie-policy')({
  component: CookiePolicyPage,
})

function CookiePolicyPage() {
  const cards = [
    {
      title: 'Necessary',
      description: 'Essential for security, identity verification, and basic platform functionality.'
    },
    {
      title: 'Analytics',
      description: 'Helping us understand how users interact with our products to improve the experience.'
    },
    {
      title: 'Preference',
      description: 'Remembering your settings and choices for a more personalized experience.'
    }
  ]

  return (
    <LegalLayout 
      title="Cookie Policy" 
      lastUpdated="April 2026"
      description="This policy explains how Driving Africa Digital Services Limited uses cookies and similar technologies to recognize you when you visit our platforms."
      cards={cards}
    >
      <LegalSection title="1. What are Cookies?">
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Cookies">
        <p>
          We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our platforms to operate, and we refer to these as "essential" or "strictly necessary" cookies.
        </p>

        <LegalChecklist items={[
          "Authentication: To recognize you when you sign in to our services.",
          "Security: To protect our users and platforms from fraudulent activity.",
          "Performance: To monitor how our platforms are performing and identify errors."
        ]} />

        <LegalInfoBox>
          "Our cookies do not store sensitive personal information like your password or credit card details."
        </LegalInfoBox>
      </LegalSection>

      <LegalSection title="3. Managing Your Preferences">
        <p>
          You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
