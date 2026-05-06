import { createFileRoute } from '@tanstack/react-router'
import {
  LegalLayout,
  LegalSection,
  LegalInfoBox,
  LegalChecklist,
  LegalAccentCard,
} from '#/components/legal/legal-layout'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
})

function TermsPage() {
  const cards = [
    {
      title: 'Governance',
      description:
        'Regulatory framework and jurisdictional compliance across Pan-African markets.',
    },
    {
      title: 'IP Protection',
      description:
        'Ownership rights of proprietary digital assets and architectural methodologies.',
    },
    {
      title: 'Liability',
      description:
        'Professional limitations and institutional indemnity protocols.',
    },
  ]

  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated={new Date().toDateString()}
      description="These terms govern the use of Driving Africa Digital Services Limited's professional platforms and investment frameworks."
      cards={cards}
    >
      <LegalSection title="1. Acceptance of Terms">
        <p className="text-lg mb-12">
          By accessing or using the digital infrastructure provided by Driving
          Africa Digital Services Limited (hereafter referred to as "the
          Company"), you acknowledge that you have read, understood, and agree
          to be bound by these Terms of Service. These terms constitute a
          legally binding agreement between you, the user, and the Company
          regarding your use of our websites, platforms, and services.
        </p>

        <p className="mb-16">
          If you are using these services on behalf of an entity, organization,
          or government body, you represent and warrant that you have the
          authority to bind such entity to these terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Use of Service">
        <p>
          The Company provides digital growth frameworks and investment portals
          designed for institutional stability. Users are granted a limited,
          non-exclusive, non-transferable license to access our platform
          strictly for professional purposes consistent with the intended
          utility of the services.
        </p>

        <LegalInfoBox>
          "Driving Africa Digital Services Limited reserves the right to
          terminate access to any user who engages in unauthorized data
          extraction, automated scraping, or any activity that compromises the
          structural integrity of our Pan-African digital network."
        </LegalInfoBox>

        <LegalChecklist
          items={[
            'Compliance with all applicable local and international financial regulations is mandatory.',
            'Users must maintain the confidentiality of any credentials provided for the Investor Portal.',
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Intellectual Property">
        <p>
          All content, including but not limited to geometric patterns, abstract
          motifs, software code, research papers, and the "HoldCo Tech" brand
          identity, are the exclusive property of Driving Africa Digital
          Services Limited. Our visual narrative, inspired by traditional
          African motifs rendered in digital high-fidelity, is protected under
          international copyright and trademark laws.
        </p>

        <LegalAccentCard text="Our IP is the Foundation of Progress." />

        <p>
          No part of the Company's digital assets may be reproduced,
          distributed, or modified without prior written consent from our legal
          department. Unauthorized use of our trademarks or proprietary
          methodology will result in immediate legal action.
        </p>
      </LegalSection>

      <LegalSection title="4. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Driving Africa Digital
          Services Limited shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, or any loss of
          data, use, goodwill, or other intangible losses.
        </p>
        <p>
          Our platforms are provided on an "AS IS" and "AS AVAILABLE" basis.
          While we strive for absolute institutional stability, we do not
          warrant that the services will be uninterrupted, timely, secure, or
          error-free. The Company's total liability for any claim under these
          terms is limited to the amount paid by the user to use the services
          during the six months preceding the claim.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
