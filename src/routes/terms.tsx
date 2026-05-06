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
        'Regulatory framework and jurisdictional compliance for Nigerian markets.',
    },
    {
      title: 'IP Protection',
      description:
        'Ownership rights of Driving Africa proprietary software and brands.',
    },
    {
      title: 'Safety',
      description:
        'Our commitment to user protection and driver standards.',
    },
  ]

  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="April 2026"
      description="These terms govern the use of Driving Africa Digital Services Limited's platforms and products, including Drift247."
      cards={cards}
    >
      <LegalSection title="1. Acceptance of Terms">
        <p className="text-lg mb-12">
          By accessing or using the digital products and platforms provided by Driving
          Africa Digital Services Limited (hereafter referred to as "the
          Company"), you acknowledge that you have read, understood, and agree
          to be bound by these Terms of Service.
        </p>

        <p className="mb-16">
          If you do not agree to these terms, you must immediately cease all use of our services.
        </p>
      </LegalSection>

      <LegalSection title="2. Use of Service">
        <p>
          The Company provides digital products designed for the African market. Users are granted a limited,
          non-exclusive, non-transferable license to access our platforms strictly for their intended purposes.
        </p>

        <LegalInfoBox>
          "Driving Africa Digital Services Limited reserves the right to
          terminate access to any user who violates our safety standards or engages in fraudulent activity."
        </LegalInfoBox>
      </LegalSection>

      <LegalSection title="3. Drift247 Specific Terms">
        <p>
          Use of the Drift247 platform is subject to additional safety and driver-conduct protocols. All drivers and passengers must adhere to our community standards to maintain the integrity and safety of the service.
        </p>

        <LegalChecklist
          items={[
            'Compliance with local Nigerian transportation laws is mandatory.',
            'Users must maintain accurate and up-to-date profile information.',
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Intellectual Property">
        <p>
          All content, including software code, brand identities (Driving Africa, Drift247), and logos are the exclusive property of Driving Africa Digital Services Limited.
        </p>

        <LegalAccentCard text="Our IP is the Foundation of our Innovation." />
      </LegalSection>

      <LegalSection title="5. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Driving Africa Digital
          Services Limited shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of our platforms.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
